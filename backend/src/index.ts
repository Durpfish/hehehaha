import express from "express";
import cors from "cors";
import { getCatalog, getDevices, getRecords } from "./functions";

const app = express();
const port = 3001;

app.use(cors());

app.get("/devices", async (req, res) => {
  setTimeout(async () => {
    try {
      const devices = await getDevices();
      res.json(devices);
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).send("Server error");
    }
  }, 1000);
});

app.get("/catalog", async (req, res) => {
  setTimeout(async () => {
    try {
      const devices = await getCatalog();
      res.json(devices);
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).send("Server error");
    }
  }, 1000);
});

app.get("/records", async (req, res) => {
  setTimeout(async () => {
    try {
      const devices = await getRecords();
      res.json(devices);
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).send("Server error");
    }
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
