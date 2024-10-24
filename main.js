const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello👋! from nodejs inside the container v2📦" });
});

app.listen(PORT, () => {
  console.log(`Server is listining on port ${PORT}`);
});
