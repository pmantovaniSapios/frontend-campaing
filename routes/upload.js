const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer.js');
const csvToJson = require('../middleware/csvToJson');

/* GET home page. */
router.post('/upload', upload.single("file"), async function(req, res, next) {

  // console.log("./storage/" + req.file.filename);
  let retorno = await csvToJson("./storage/" + req.file.filename);

  if (retorno == true) {
    res.render("upload", { title: "Upload - Campanha Sapios" });
  } else {
    res.render("upload", { title: "" });
  }

});

module.exports = router;