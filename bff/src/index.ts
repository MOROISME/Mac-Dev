import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // Node 18+ なら不要（組み込みfetchが使える）

const app = express();
app.use(cors());
app.use(express.json());

const BACKEND_URL = "http://localhost:4000";

app.get("/api/data1", async (req, res) => {
  try {
    const response = await fetch(`${BACKEND_URL}/data1`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data1", error: String(error) });
  }
});

app.get("/api/data2", async (req, res) => {
  try {
    const response = await fetch(`${BACKEND_URL}/data2`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data2", error: String(error) });
  }
});

app.get("/api/data3", async (req, res) => {
  const { param1, param2 } = req.query;

  try {
    const url = new URL(`${BACKEND_URL}/data3`);
    url.searchParams.append("param1", String(param1));
    url.searchParams.append("param2", String(param2));

    const response = await fetch(url.toString());
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data3", error: String(error) });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`BFF running on http://localhost:${PORT}`);
});
