const express = require("express");
const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.get("/formGet", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/formPost", (req, res) => {
  console.log(req.body);

  res.sendFile(__dirname + "/public/submitted.html");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
