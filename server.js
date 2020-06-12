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

//TODO Create methods to retrieve coordinates

app.get("/api/checkLive", async (req, res) => {
  const query = "select * from readings order by reading_id desc limit 1";
  var connection = mysql.createConnection({
    host: process.env.endpoint,
    user: process.env.user,
    password: process.env.password,
    database: "main",
    port: process.env.dbport,
  });

  connection.connect();

  connection.query(query, function (error, results, fields) {
    let is_live = false;
    if (results) {
      let timestamp = moment(results[0].reading_date);
      is_live = Math.abs(timestamp.diff(moment(), "seconds")) < 600;
    }
    res.send({ data: is_live });
  });

  connection.end();
});
app.get("/api/getCoordinates", async (req, res) => {
  //Parameters: start_date, end_date, max_num

  let returnData = [];
  var connection = mysql.createConnection({
    host: process.env.endpoint,
    user: process.env.user,
    password: process.env.password,
    database: "main",
    port: process.env.dbport,
  });
  //yesterday moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")
  let {
    start_date,
    end_date = moment().format("YYYY-MM-DD HH:mm:ss"),
    max_num,
  } = req.query;
  console.log(req.query);

  let whereClauses = null;
  if (start_date && start_date !== "null") {
    whereClauses = `reading_date >= '${start_date}'`;
  }

  let base_query = `select  * from readings ${
    whereClauses ? `WHERE ${whereClauses}` : ""
  } ${max_num ? "limit " + max_num : ""}`;
  console.log(base_query);
  connection.connect();

  connection.query(base_query, function (error, results, fields) {
    if (results) {
      returnData = results;
    }
    res.send({ data: returnData });
  });

  connection.end();
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
