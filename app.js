const express = require('express')
const exphbs = require('express-handlebars');
const app = express()
const helmet = require('helmet')

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(helmet())

app.use(express.static('public'))

const projects = [
    {
        image: 'images/project__joblist.png',
        title: 'JobList',
        tags: ['PHP', 'Material Design', 'Laravel', 'Landing Page'],
        url: 'https://github.com/MaartenGDev/JobList',
    },
    {
        image: 'images/project__tripsearch.png',
        title: 'TripSearch',
        tags: ['ElasticSearch', 'GuzzleHttp', 'Composer', 'PHP'],
        url: 'https://github.com/MaartenGDev/TripSearch',
    },
    {
        image: 'images/project__cars.png',
        title: 'Cars',
        tags: ['PHP', 'Symfony', 'Material Design', 'UX'],
        url: '#projects',
    },
    {
        image: 'images/project__cachedrivers.png',
        title: 'CacheDrivers',
        tags: ['PHPUnit', 'Travis CI', 'Package', 'Code Coverage'],
        url: 'https://github.com/MaartenGDev/CacheDrivers',
    },
    {
        image: 'images/project__planner.png',
        title: 'Planner',
        tags: ['ReactJS', 'SPA', 'Laravel', 'REST API'],
        url: 'https://github.com/MaartenGDev/planner',
    },
    {
        image: 'images/project__devblog.png',
        title: 'devBlog',
        tags: ['Laravel', 'Blog', 'CRUD'],
        url: 'https://github.com/MaartenGDev/devBlog',
    },

];

app.get('/', (req, res) => {
    res.render('home', {
        name: 'maarten',
        projects: projects
    })
})

app.listen(3001, _ => {
    console.log('Example app listening on port 3001!')
})
