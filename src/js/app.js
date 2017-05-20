import Highlight from './highlight'
import Tabs from './tabs'
import staticDataLoader from './staticDataLoader'
import '../sass/app.sass'

const highlight = new Highlight()
const tabs = new Tabs()

staticDataLoader.load()

highlight.init('.project', [
  {selector: '.project__image', classes: ['--zoomed', '--preview']},
  {selector: '.project__overlay', classes: ['--smooth', '--dark']},
  {selector: '.project__chip', classes: ['--hidden', '--zoomed']},
  {selector: '.project__view', classes: ['--hidden']}
])

tabs.init('.tabs__nav')
