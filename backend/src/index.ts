import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/data1", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.get("/data2", (req, res) => {
  res.json({ message: "This is data2 from backend!" });
});

app.get("/data3", (req, res) => {
  const { param1, param2 } = req.query;
  res.json({ message: `Backend received param1=${param1}, param2=${param2}` });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
