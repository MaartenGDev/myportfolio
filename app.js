const express = require('express')
const exphbs  = require('express-handlebars');
const app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/.well-known/acme-challenge/', express.static(__dirname + '/.well-known/acme-challenge'));

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home', {
        name: 'maarten'
    })
})

app.listen(3001, function () {
    console.log('Example app listening on port 3001!')
})
