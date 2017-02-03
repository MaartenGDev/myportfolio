const express = require('express')
const exphbs = require('express-handlebars');
const app = express()
const helmet = require('helmet')

app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));

app.set('view engine', '.hbs');

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

const links = [
    {
        url: 'https://github.com/maartenGDev',
        cssClass: 'social--github',
        icon: 'fa-github',
        newTab: true
    },
    {
        url: 'https://www.linkedin.com/in/maarten-grootoonk-098556131',
        cssClass: 'social--linkedin social--left',
        icon: 'fa-linkedin',
        newTab: true
    },
    {
        url: 'http://stackoverflow.com/users/6310593/maartendev',
        cssClass: 'social--stackoverflow social--right',
        icon: 'fa-stack-overflow',
        newTab: true
    },
    {
        url: 'mailto:hello@maartendev.me',
        cssClass: 'social--mail',
        icon: 'fa-envelope',
        newTab: false
    },

];

app.get('/', (req, res) => {
    res.render('home', {
        name: 'maarten',
        projects: projects,
        links: links
    })
})

app.listen(3001, _ => {
    console.log('Example app listening on port 3001!')
})
