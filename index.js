const cp = require("child_process");
const express = require("express");
const app = express();
const port = 2023;

app.get("/openFinger", function (req, res) {
  openFingerBpjs();
  res.send("sampun");
});

app.get("/bringFrontApp/:name", function (req, res) {
  var appName = "";
  if (req.params.name) appName = req.params.name;
  cp.exec(
    'nircmd win activate stitle "' + appName + '"',
    function (err, data, stderr) {
      console.log(err);
      console.log(data);
      console.log(stderr);
      // install nircmd lalu masukan ke environtment path
      openFingerBpjs();
    }
  );
  console.log('nircmd win activate stitle "' + appName + '"');
  res.send(appName);
});

app.get("/", function (req, res) {
  res.send("nggapain");
});

app.listen(port, function () {
  console.log("Service openApp sudah berjalan di port : " + port);
});

var openFingerBpjs = function () {
  cp.execFile(
    "C:\\Program Files (x86)\\BPJS Kesehatan\\Aplikasi Sidik Jari BPJS Kesehatan\\After.exe",
    [""],
    function (err, data) {
      console.log(err);
      console.log(data.toString());
    }
  );
};
