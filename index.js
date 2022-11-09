const express = require("express");
const app = express();
const cors = require("cors");
const data = require("./data.json");
app.use(cors());

app.get("/", (req, res) => {
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
app.all("*", (req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.listen(process.env.PORT || 4000, (req, res) => {
  console.log("Server started");
});
