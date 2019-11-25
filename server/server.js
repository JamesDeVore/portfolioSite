const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname,"..", "public");

const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "..", "build")));
app.get("*", (req, res) => {
  console.log(publicPath)
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
