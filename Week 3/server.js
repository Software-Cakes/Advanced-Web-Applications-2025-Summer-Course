var http = require("http");
console.log("Server running...");
http.createServer(function (req, res) {
    console.log("Client made a request");
    res.write("Hello client!");
    res.end();
}).listen(3000);
