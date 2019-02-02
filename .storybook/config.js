import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, select } from '@storybook/addon-knobs/react';

const req = require.context('./stories', true, /stories.js$/);

addDecorator(withKnobs);
setAddon(JSXAddon);

function loadStories() {
  require('./stories/welcomeStory');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
