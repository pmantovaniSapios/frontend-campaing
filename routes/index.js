const express = require("express");
const router = express.Router();
const { default: axios } = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Dashboard - Campanha Sapios" });
});

module.exports = router;
