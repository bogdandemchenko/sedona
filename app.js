const express = require('express')
const app = express()
const port = 4000

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', { title: 'Main', message: 'Sedona'});
});

app.get('/catalog', function (req, res) {
    res.render('index', { title: 'Catalog', message: 'Hotels of Sedona'});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

