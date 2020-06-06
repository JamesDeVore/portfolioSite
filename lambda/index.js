const mysql = require("mysql");
const util = require("util");
const moment = require("moment");
const querystring = require("query-string");

var connection = mysql.createConnection({
  host: process.env.endpoint,
  user: process.env.name,
  password: process.env.password,
  database: "main",
  port: 3369,
});

exports.handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  let tempParams =
    "ToCountry=US&ToState=AL&SmsMessageSid=SM49b3b3aa098f9538a330d3e4e5a3a9ee&NumMedia=0&ToCity=BIRMINGHAM&FromZip=86326&SmsSid=SM49b3b3aa098f9538a330d3e4e5a3a9ee&FromState=AZ&SmsStatus=received&FromCity=CORNVILLE&Body=lat%3A35.945911%0Alng%3A-78.821251%0Akph%3A0.00%0Aheading%3A0.000%0Aalt%3A100.40%0A%0A%0A&FromCountry=US&To=%2B12055286350&ToZip=35244&NumSegments=1&MessageSid=SM49b3b3aa098f9538a330d3e4e5a3a9ee&AccountSid=ACe1052417af3c41e64de53175637c8bd0&From=%2B19284512858&ApiVersion=2010-04-01";

  console.log(querystring.parse(tempParams));
  if (event.Body) {
    let columns = [
      "`reading_date`",
      "`latitude`",
      "`longitude`",
      "`speed`",
      "`altitude`",
    ];
    // console.log(req.body);
    // let splitBody = event.Body.split("\n")
    //   .filter((e) => e.length > 0)
    //   .filter((e) => !e.includes("head"));
    // // console.log(splitBody);
    // let justValues = splitBody.map((data) => {
    //   let items = data.split(":");
    //   if (!items[1]) {
    //     return null;
    //   } else {
    //     return items[1];
    //   }
    // });
    // justValues.unshift(`'${moment().format("YYYY-MM-DD HH:mm:ss")}'`);

    // let finalCols = `INSERT INTO \`main\`.\`readings\`(${columns.join(",")})`;

    // let finalVals = `VALUES (${justValues.join(",")})`;
    // const connQueryPromisified = util
    //   .promisify(connection.query)
    //   .bind(connection);
    // let error = null;
    // const result = await connQueryPromisified(
    //   `${finalCols} ${finalVals}`
    // ).catch((err) => (error = err));
    // console.log(result);

    // connection.end();
    callback(null, event);
  }
};
