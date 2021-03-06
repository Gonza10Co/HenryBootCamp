var http = require("http");
var fs = require("fs");

var beatles = [
  {
    name: "John Lennon",
    birthdate: "09/10/1940",
    profilePic:
      "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
  },
  {
    name: "Paul McCartney",
    birthdate: "18/06/1942",
    profilePic:
      "http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg",
  },
  {
    name: "George Harrison",
    birthdate: "25/02/1946",
    profilePic:
      "https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg",
  },
  {
    name: "Richard Starkey",
    birthdate: "07/08/1940",
    profilePic:
      "http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg",
  },
];

const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

http
  .createServer(function (req, res) {
    if (req.url === "/api") {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(beatles));
    }
    if (req.url.substring(0, 5) === "/api/") {
      const search = req.url.split("/").pop(); //extraemos Jhon%20Lennon
      const beatle = beatles.find((e) => encodeURI(e.name) === search);
      if (beatle) {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(beatles[0]));
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end(
          '<h1 style="text-align: center;"> 404 Beatle Not Found</h1>'
        );
      }
    }

    if (req.url === "/") {
      return readFile("./index.html").then((html) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(html);
      });
    }
    if (req.url[0] === "/" && req.url.length > 1) {
      //Buscamos el Beatle
      const search = req.url.split("/").pop(); //extraemos Jhon%20Lennon
      const beatle = beatles.find((e) => encodeURI(e.name) === search);

      if (beatle) {
        return readFile("./beatle.html").then((html) => {
          //Reemplazamos el template
          html = html.replaceAll("{name}", beatle.name);
          html = html.replace("{birthdate}", beatle.birthdate);
          html = html.replace("{profilePic}", beatle.profilePic);
          //contestamos la solicitud
          res.writeHead(200, { "Content-Type": "text/html" });
          return res.end(html);
        });
      }
    }

    res.writeHead(404, { "Content-Type": "text/html" });
    res.end('<h1 style="text-align: center;"> 404 Not Found</h1>');
  })
  .listen(1337, "127.0.0.1");
