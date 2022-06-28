const fs = require("fs");

module.exports = {
  date: (args, done) => done(Date()),
  pwd: (args, done) => done(process.cwd()),
  ls: (args, done) => {
    fs.readdir(".", (err, files) => {
      if (err) throw err;
      let strFiles = "";
      files.forEach((file) => (strFiles += file + "\n"));
      done(strFiles);
    });
  },
  echo: (data, done) => {
    done(data.join(" "));
  },
  cat: (file, done) => {
    fs.readFile(file[0], (err, data) => {
      if (err) throw err;
      done(data);
    });
  },
  head: (file, done) => {
    fs.readFile(file[0], "utf8", (err, data) => {
      if (err) throw err;
      const lines = data.split("\n");
      done(lines.slice(0, 10).join("\n"));
    });
  },
  tail: (file, done) => {
    fs.readFile(file[0], "utf8", (err, data) => {
      if (err) throw err;
      const lines = data.split("\n");
      done(lines.slice(-10).join("\n"));
    });
  },
};
