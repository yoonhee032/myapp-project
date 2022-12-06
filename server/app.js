const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`open server : ${PORT}`);
});
