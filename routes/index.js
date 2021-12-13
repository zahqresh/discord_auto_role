var express = require("express");
const db = require("../models/db");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.post("/", (req, res) => {
  console.log(req.body);
  const { discord_username, discord_id } = req.body;
  db({ discord_username, discord_id })
    .save()
    .then((doc) => {
      console.log(doc);
      // res.send("https://discord.com/invite/BNKaZKbJ");
      res.render("success", {
        discord_link: "https:discord.com/invite/BNKaZKbJ",
      });
    });
});


module.exports = router;
