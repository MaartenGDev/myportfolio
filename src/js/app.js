const Typer = require("./typer.js");
const Hightlight = require("./highlight");

const typer = new Typer;
const highlight = new Hightlight;

const content = [
    {text: 'Software', selector: '.profile__tag--type', time: 50},
    {text: ' ', selector: '.profile__tag--spacing', time: 0},
    {text: 'Developer', selector: '.profile__tag--branch', time: 80}
];

typer.type(content);

highlight.init('.project', [
    {selector: '.project__image', classes: ['--zoomed', '--preview']},
    {selector: '.project__overlay', classes: ['--smooth','--dark']},
    {selector: '.project__chip', classes: ['--hidden','--zoomed']},
    {selector: '.project__view', classes: ['--hidden']},
]);


