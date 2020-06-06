const express = require("express");
const path = require("path");
const fs = require("fs");
var bodyParser = require("body-parser");
const moment = require("moment");
let fetch = require("node-fetch");
const mysql = require("mysql");

require("dotenv").config();

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.urlencoded({ extended: false }));
// An api endpoint that returns a short list of items
app.get("/api/getList", (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});

app.post("/text", async (req, res) => {
  var connection = mysql.createConnection({
    host: process.env.endpoint,
    user: process.env.user,
    password: process.env.password,
    database: "main",
    port: process.env.dbport,
  });
  // let example = fs.readFileSync("./example.json");
  // req.body = JSON.parse(example);
  // console.log(req.body);
  let columns = [
    "`reading_date`",
    "`latitude`",
    "`longitude`",
    "`speed`",
    "`altitude`",
  ];
  // console.log(req.body);
  let splitBody = req.body.Body.split("\n")
    .filter((e) => e.length > 0)
    .filter((e) => !e.includes("head"));
  // console.log(splitBody);
  let justValues = splitBody.map((data) => {
    let items = data.split(":");
    if (!items[1]) {
      return null;
    } else {
      return items[1];
    }
  });
  justValues.unshift(`'${moment().format("YYYY-MM-DD HH:mm:ss")}'`);

  let finalCols = `INSERT INTO \`main\`.\`readings\`(${columns.join(",")})`;

  let finalVals = `VALUES (${justValues.join(",")})`;
  let finalQ = `${finalCols} ${finalVals}`;
  connection.connect();

  connection.query(finalQ, function (error, results, fields) {
    if (error) throw error;
  });

  connection.end();

  res.send("");
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
