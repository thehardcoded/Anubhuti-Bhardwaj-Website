const express = require('express')
const app = express()
const port = 443;
const blogs = require('./public/scripts/blog');
const bjmc_courses = require('./public/scripts/bjmc courses');

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  const latestblog = (blogs.sort((a, b) => { return new Date(b.data.date) - new Date(a.data.date); })).slice(0, 3);
  res.render('index', { latestblog: latestblog })
})

app.get('/project', (req, res) => {
  res.render('project')
})

app.get('/blog', (req, res) => {
  const allblogs = blogs.sort((a, b) => { return new Date(b.data.date) - new Date(a.data.date); })
  res.render('blog', { allblogs: allblogs })
})

app.get('/blog/:metatitle', (req, res) => {
  const article = blogs.find(x => x.data.metatitle === (req.params.metatitle));
  var md = require("markdown-it")();
  var result = md.render(article.content);
  res.render('post', { article: article, post: result });
})

app.get('/StudyMaterial', (req, res) => {
  res.render('study material')
})

app.get('/StudyMaterial/BJMC_Notes', (req, res) => {
  res.render('bjmc main page')
})

app.get('/StudyMaterial/BJMC_Notes/BJMC_1st_year_notes', (req, res) => {
  res.render('bjmc 1st year',{bjmc_courses:bjmc_courses})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})