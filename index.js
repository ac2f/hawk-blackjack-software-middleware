const axios = require('axios').default;
const qs = require("qs");
const express = require('express');
const cors = require("cors")
const tunnel = require('tunnel');

var data = {
    "type": "",
    "secret": "Po0Jfy9EIqqXNZgDfZDo1EM8IaQde0Y9iQi",
    "apikey": "333335761329683227737747421555831",
    "aid": "718211",
};
var headers = { 'Accept-Encoding': 'utf8', 'Content-Type': 'application/x-www-form-urlencoded, application/json', "Accept": "*/*",  };
var proxies = 
const random = (max) => Math.floor(Math.random() * max);
var app = express();
app.use(cors({origin: "*"}));
app.use(express.json());
app.post("/augg", (req, res) => {
    var tmpData = data;
    for (var key in req.body) {
        tmpData[key] = req.body[key];
    };
    console.log(qs.stringify(tmpData));
    var proxyIndex = proxies[random(proxies.length)]; 
    // var proxy  = {"host": proxyIndex[0], "port": proxyIndex[1]}
    var proxy = {"host": "185.242.92.2", "port": 8086, "auth": "silver14:248nmsk2"};
    axios.post("https://api.auth.gg/v1/", qs.stringify(tmpData), config={headers: headers, proxy: proxy}).then(e => res.send(e.data)).catch(e => res.send(e));
});
var server = app.listen(3333, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("App listening at http://localhost:%s", host, port);
});