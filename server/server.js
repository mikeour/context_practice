const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(3002, () => console.log("Express server started on port 3002!"));
