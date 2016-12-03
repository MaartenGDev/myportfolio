const Typer = require("./typer.js");

const typer = new Typer;
const content = [
    {
        text: 'Software',
        selector: '.profile__tag--type',
        time: 50
    },
    {
        text: ' ',
        selector: '.profile__tag--spacing',
        time: 0
    },
    {
        text: 'Developer',
        selector: '.profile__tag--branch',
        time: 80
    }
];
typer.type(content);