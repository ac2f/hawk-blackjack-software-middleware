const axios = require('axios').default;
const qs = require("qs");
const express = require('express');
const cors = require("cors")
var data = {
    "type": "",
    "secret": "Po0Jfy9EIqqXNZgDfZDo1EM8IaQde0Y9iQi",
    "apikey": "333335761329683227737747421555831",
    "aid": "718211",
};
var headers = { 'Accept-Encoding': 'utf8', 'Content-Type': 'application/x-www-form-urlencoded, application/json', "Accept": "*/*",  };

var app = express();
app.use(cors({origin: "*"}));
app.use(express.json());
app.post("/augg", (req, res) => {
    var tmpData = data;
    for (var key in req.body) {
        tmpData[key] = req.body[key];
    };
    console.log(qs.stringify(tmpData));
    axios.post("https://api.auth.gg/v1/", qs.stringify(tmpData), config={headers: headers}).then(e => res.send(e.data)).catch(e => res.send(e));
});
var server = app.listen(3333, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("App listening at http://localhost:%s", host, port);
});