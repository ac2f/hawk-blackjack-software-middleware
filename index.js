const axios = require("axios").default;
const qs = require("qs");
const express = require("express");
const cors = require("cors")
const tunnel = require("tunnel");

var data = {
    "type": "",
    "secret": "Po0Jfy9EIqqXNZgDfZDo1EM8IaQde0Y9iQi",
    "apikey": "333335761329683227737747421555831",
    "aid": "718211",
};
var headers = { "Accept-Encoding": "utf8", "Content-Type": "application/x-www-form-urlencoded, application/json", "Accept": "*/*",  };
var proxies = [["185.242.92.2", "8086"], ["185.242.93.70", "8410"], ["154.194.8.95", "5626"], ["45.9.122.193", "8274"], ["91.212.100.92", "6668"], ["91.212.100.24", "6600"], ["156.238.10.155", "5237"], ["45.9.122.157", "8238"], ["156.238.10.166", "5248"], ["45.9.122.240", "8321"], ["113.30.155.78", "6086"], ["113.30.155.243", "6251"], ["23.229.126.225", "7754"], ["154.95.1.37", "6559"], ["113.30.154.59", "5736"], ["23.236.222.26", "7057"], ["194.31.162.118", "7634"], ["23.236.222.251", "7282"], ["156.238.10.6", "5088"], ["156.238.10.32", "5114"], ["91.212.100.0", "6576"], ["154.85.126.207", "5214"], ["154.95.0.181", "6434"], ["45.9.122.40", "8121"], ["185.242.93.154", "8494"], ["154.95.0.101", "6354"], ["154.194.8.165", "5696"], ["156.238.10.146", "5228"], ["154.85.126.0", "5007"], ["45.9.122.174", "8255"], ["156.238.10.99", "5181"], ["185.242.93.102", "8442"], ["91.212.100.250", "6826"], ["156.238.10.235", "5317"], ["156.238.10.227", "5309"], ["154.95.1.230", "6752"], ["185.242.92.226", "8310"], ["154.95.1.38", "6560"], ["154.95.0.187", "6440"], ["154.95.0.41", "6294"], ["154.95.0.113", "6366"], ["154.95.0.0", "6253"], ["113.30.153.5", "5341"], ["113.30.152.46", "5104"], ["113.30.155.68", "6076"], ["154.95.38.70", "5728"], ["23.229.126.122", "7651"], ["156.238.10.240", "5322"], ["113.30.154.239", "5916"], ["154.95.0.156", "6409"], ["154.194.8.132", "5663"], ["113.30.154.47", "5724"], ["113.30.152.9", "5067"], ["154.95.0.86", "6339"], ["113.30.154.62", "5739"], ["194.31.162.119", "7635"], ["113.30.155.84", "6092"], ["113.30.153.235", "5571"], ["91.212.100.96", "6672"], ["154.194.8.151", "5682"]];
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