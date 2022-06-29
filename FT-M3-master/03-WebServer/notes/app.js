var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    switch (req.url) {
      case "/": {
        res.writeHead(200, { "Content-Type": "text/html" });
        let html = fs.readFileSync("./template.html", "utf-8");
        let nombre = "Gonzalo";
        html = html.replace("{nombre}", nombre);
        res.end(html);
      }
      case "/api": {
        res.writeHead(200, { "Content-Type": "application/json" });
        let obj = { nombre: "juan", apellido: "perez" };
        res.end(JSON.stringify(obj));
      }
      default: {
        res.writeHead(404);
        res.end();
      }
    }
  })
  .listen(1337, "127.0.0.1");
