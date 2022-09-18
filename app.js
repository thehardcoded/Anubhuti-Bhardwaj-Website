const express = require('express')
const app = express()
const port = 3000;
const blogs = require('./public/scripts/blog');

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  const latestblog = (blogs.sort((a, b) => { return new Date(b.data.date) - new Date(a.data.date);})).slice(0, 3);
  res.render('index', { latestblog: latestblog})
})
 
app.get('/blog', (req, res) => {
  const allblogs = blogs.sort((a, b) => { return new Date(b.data.date) - new Date(a.data.date);})
  res.render('blog', { allblogs: allblogs })
})

app.get('/blog/:metatitle', (req, res) => {
  const article = blogs.find(x => x.data.metatitle === (req.params.metatitle));
  var md = require("markdown-it")();
  var result = md.render(article.content);
  res.render('post', { article: article, post:result });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })