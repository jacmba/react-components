import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const handler = async (req, res) => {
  const method = req?.method;
  const id = parseInt(req?.query?.id);
  const recordFromBody = req?.body;

  const jsonFile = path.resolve("./", "db.json");

  const putMethod = async () => {
    try {
      const readFileData = await readFile(jsonFile, "utf-8");
      await delay(1000);
      const speakers = JSON.parse(readFileData);
      if (!speakers) {
        return res.status(404).send("DB file not found!");
      }
      const newSpeakers = speakers.map((rec) =>
        rec.id === recordFromBody.id ? recordFromBody : rec
      );

      writeFile(jsonFile, JSON.stringify(newSpeakers, null, 2));
      res.json(recordFromBody);
    } catch (e) {
      console.error(e);
      res.status(500).send("An error ocurred", e);
    }
  };

  const postMethod = async () => {
    try {
      const readFileData = await readFile(jsonFile, "utf-8");
      await delay(1000);
      const speakers = JSON.parse(readFileData);
      if (!speakers) {
        return res.status(404).send("DB file not found!");
      }

      const newSpeaker = { ...recordFromBody, id: Date.now().toString() };
      const newSpeakers = [newSpeaker, ...speakers];

      console.log(newSpeakers);

      writeFile(jsonFile, JSON.stringify(newSpeakers, null, 2));
      res.json(newSpeaker);
    } catch (e) {
      console.error(e);
      res.status(500).send("An error ocurred", e);
    }
  };

  const deleteMethod = async () => {
    try {
      const readFileData = await readFile(jsonFile, "utf-8");
      await delay(1000);
      const speakers = JSON.parse(readFileData);
      if (!speakers) {
        return res.status(404).send("DB file not found!");
      }

      const newSpeakers = speakers.filter((rec) => rec.id !== id);

      writeFile(jsonFile, JSON.stringify(newSpeakers, null, 2));
      res.json(speakers.find((rec) => rec.id === id));
    } catch (e) {
      console.error(e);
      res.status(500).send("An error ocurred", e);
    }
  };

  switch (method) {
    case "POST":
      postMethod();
      break;
    case "PUT":
      await putMethod();
      break;
    case "DELETE":
      await deleteMethod();
      break;
    default:
      res.status(501).send(`Method ${method} not implemented`);
  }
};

export default handler;
