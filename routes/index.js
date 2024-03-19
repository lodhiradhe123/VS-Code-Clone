var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");

const globalpath = path.join(__dirname, "../", "public", "uploads");

/* GET home page. */
router.get("/", function (req, res, next) {
  const files = fs.readdirSync(globalpath);
  res.render("index", { files: files, filedata: "" });
});

// router.get("/:filename", function (req, res, next) {
//   const files = fs.readdirSync(globalpath);
//   res.render("index", { files: files, filedata: "" });

//   // console.log(files);
// });

router.post("/createfile", function (req, res, next) {
  // const filename = req.body.filename;
  const { filename } = req.body;
  fs.writeFileSync(
    path.join(globalpath, filename),
    `file created by myself Radhe👌👌👌👌👌👌👌😎😎😎😎😎😎😎 file name=>${filename}`
  );
  res.redirect(`/file/${filename}`);
});

router.get("/file/:filename", function (req, res) {
  const files = fs.readdirSync(globalpath);
  const filedata = fs.readFileSync(
    path.join(globalpath, req.params.filename),
    "utf-8"
  );
  res.render("index", { files: files, filedata: filedata });
});

router.get("/delete/:filename", function (req, res) {
  fs.unlinkSync(path.join(globalpath, req.params.filename), "");
  res.redirect("/");
});

module.exports = router;
