import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const useRequestDelay = (delayMs = 1000, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(async () => {
    try {
      await delay(delayMs);
      setData(data);
      setRequestStatus(REQUEST_STATUS.SUCCESS);
    } catch (e) {
      setRequestStatus(REQUEST_STATUS.FAILURE);
      setError(e);
    }
  });

  const updateRecord = (record, doneCallBack) => {
    const originalRecords = [...data];
    const newRecords = data.map((rec) => (rec.id === record.id ? record : rec));

    const delayFunction = async () => {
      try {
        setData(newRecords);
        await delay(delayMs);
        if (doneCallBack) {
          doneCallBack();
        }
      } catch (error) {
        console.log("Error thrown inside delayFunction", error);
        if (doneCallBack) {
          doneCallBack();
        }
        setData(originalRecords);
      }
    };

    delayFunction();
  };

  const insertRecord = (record, doneCallBack) => {
    const originalRecords = [...data];
    const newRecords = [record, ...data];

    const delayFunction = async () => {
      try {
        setData(newRecords);
        await delay(delayMs);
        if (doneCallBack) {
          doneCallBack();
        }
      } catch (error) {
        console.log("Error thrown inside delayFunction", error);
        if (doneCallBack) {
          doneCallBack();
        }
        setData(originalRecords);
      }
    };

    delayFunction();
  };

  const deleteRecord = (record, doneCallBack) => {
    const originalRecords = [...data];
    const newRecords = data.filter((rec) => rec.id !== record.id);

    const delayFunction = async () => {
      try {
        setData(newRecords);
        await delay(delayMs);
        if (doneCallBack) {
          doneCallBack();
        }
      } catch (error) {
        console.log("Error thrown inside delayFunction", error);
        if (doneCallBack) {
          doneCallBack();
        }
        setData(originalRecords);
      }
    };

    delayFunction();
  };

  return {
    data,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  };
};

export default useRequestDelay;
