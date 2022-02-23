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

  const updateRecord = (recordUpdated) => {
    const newRecords = data.map((rec) =>
      rec.id === recordUpdated.id ? recordUpdated : rec
    );

    const delayFunction = async () => {
      try {
        await delay(delayMs);
        setData(newRecords);
      } catch (error) {
        console.log("Error thrown inside delayFunction", error);
      }
    };

    delayFunction();
  };

  return {
    data,
    requestStatus,
    error,
    updateRecord,
  };
};

export default useRequestDelay;