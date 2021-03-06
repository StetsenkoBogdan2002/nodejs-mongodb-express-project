const express = require("express");
const app = express();
const Post = require("./models/post");
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
      Post.find({}).then(posts => {
         res.render("index.ejs", { data: posts });

      })
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/create", (req, res) => {
  const { title, body } = req.body;
  Post.create({ title, body }).then((post) => console.log(post.id));
  res.redirect("/");
});

module.exports = app;
