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
var proxies = [
    ["185.47.184.253", "45463"],
    ["189.201.189.2", "4145"],
    ["182.54.148.1", "4145"],
    ["204.10.182.34", "39593"],
    ["1.186.85.74", "5678"],
    ["103.59.200.14", "4145"],
    ["178.48.68.61", "4145"],
    ["172.67.171.207", "80"],
    ["172.67.171.222", "80"],
    ["172.64.136.9", "80"],
    ["185.174.138.19", "80"],
    ["203.23.106.61", "80"],
    ["45.12.30.29", "80"],
    ["185.171.231.236", "80"],
    ["203.24.108.112", "80"],
    ["203.28.8.172", "80"],
    ["45.8.107.46", "80"],
    ["203.24.103.40", "80"],
    ["194.87.59.84", "80"],
    ["141.193.213.2", "80"],
    ["141.101.113.23", "80"],
    ["203.24.103.76", "80"],
    ["45.8.107.99", "80"],
    ["203.32.120.196", "80"],
    ["172.67.171.216", "80"],
    ["185.238.228.9", "80"],
    ["172.67.120.209", "80"],
    ["172.67.192.47", "80"],
    ["103.21.244.10", "80"],
    ["45.8.107.184", "80"],
    ["203.30.188.205", "80"],
    ["203.30.188.25", "80"],
    ["203.30.191.90", "80"],
    ["203.30.189.78", "80"],
    ["203.30.189.12", "80"],
    ["203.24.109.139", "80"],
    ["45.12.31.179", "80"],
    ["203.30.188.191", "80"],
    ["203.30.189.82", "80"],
    ["45.8.105.102", "80"],
    ["203.22.223.91", "80"],
    ["203.30.189.167", "80"],
    ["91.226.97.207", "80"],
    ["45.8.106.197", "80"],
    ["45.8.107.16", "80"],
    ["104.254.140.0", "80"],
    ["31.43.179.80", "80"],
    ["172.67.3.152", "80"],
    ["203.13.32.81", "80"],
    ["172.67.181.197", "80"],
    ["172.67.176.227", "80"],
    ["203.23.104.220", "80"],
    ["203.30.188.239", "80"],
    ["45.8.104.219", "80"],
    ["50.219.7.212", "80"],
    ["141.193.213.50", "80"],
    ["194.87.58.95", "80"],
    ["172.67.181.168", "80"],
    ["172.67.209.253", "80"],
    ["191.101.251.227", "80"],
    ["172.67.167.8", "80"],
    ["172.67.176.190", "80"],
    ["172.67.176.219", "80"],
    ["172.67.176.249", "80"]
];
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
    var proxy  = {"host": proxyIndex[0], "port": proxyIndex[1]}
    axios.post("https://api.auth.gg/v1/", qs.stringify(tmpData), config={headers: headers, proxy: false, httpsAgent: tunnel.httpsOverHttp({proxy: proxy})}).then(e => res.send(e.data)).catch(e => res.send(e));
});
var server = app.listen(3333, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("App listening at http://localhost:%s", host, port);
});