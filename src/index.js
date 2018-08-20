"use strict";
exports.__esModule = true;
var express_1 = require("express");
var bodyParser = require("body-parser");
var app = express_1["default"]();
var port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/api/v1/healthCheck', function (req, res) {
    res.status(200).send('OK');
});
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
