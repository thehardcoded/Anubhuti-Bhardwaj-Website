const express = require('express')
const app = express()
var fs = require('fs');
const path = require('path');


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const matter = require('gray-matter');


var blogs = [];
const files = fs.readdirSync(path.resolve(__dirname, "../posts/"));

files.forEach(files => {
  const filepath = path.resolve(__dirname, '../posts/' + files)
  const file = matter.read(filepath);
  blogs.push(file);
});

module.exports = blogs;

