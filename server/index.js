const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hey, backend working!" });
});

app.listen(PORT, () => {
  console.log(`Server is working: http://localhost:${PORT}`);
});

app.use(cors())