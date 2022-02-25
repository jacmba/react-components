import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const handler = async (req, res) => {
  const jsonFile = path.resolve("./", "db.json");
  try {
    const readFileData = await readFile(jsonFile, "utf-8");
    await delay(1000);
    const speakers = JSON.parse(readFileData);
    if (speakers) {
      res.json(speakers);
    }
  } catch (e) {
    console.error(e);
    res.status(404).send("DB file not found");
  }
};

export default handler;
