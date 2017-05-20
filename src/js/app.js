import Typer from './typer';
import Hightlight from './highlight';
import Tabs from './tabs';
import staticDataLoader from './staticDataLoader';

const typer = new Typer;
const highlight = new Hightlight;
const tabs = new Tabs;

import '../sass/app.sass';

staticDataLoader.load();

const content = [
    {text: 'EXAMPLE USER', selector: '.profile__title', time: 70}
];

typer.type(content);


highlight.init('.project', [
    {selector: '.project__image', classes: ['--zoomed', '--preview']},
    {selector: '.project__overlay', classes: ['--smooth','--dark']},
    {selector: '.project__chip', classes: ['--hidden','--zoomed']},
    {selector: '.project__view', classes: ['--hidden']},
]);

tabs.init('.tabs__nav');

