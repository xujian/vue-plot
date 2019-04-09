import Vue from 'vue'
import { configure, addParameters, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import options from './options'
import ChartLib from '../src/index'
import withLiveCode from './decorators/withLiveCode'
import withProps from './decorators/withProps'
import './global.css'

let themesOptions = {
  themes: {
    dark: {
      name: 'Dark',
      type: 'mobile',
    },
    warm: {
      name: 'Warm',
      type: 'mobile',
    },
    cold: {
      name: 'Cold',
      type: 'mobile',
    }
  },
  defaultTheme: 'dark',
  changed: (theme) => {
    console.log('theme changed--------', theme)
  }
}
// Option defaults:
addParameters({
  options,
  themesOptions
})

addDecorator(withKnobs)
addDecorator(withLiveCode)
// addDecorator(withProps)

Vue.use(ChartLib, {
  theme: 'dark'
})

function loadStories() {
  require('../src/stories')
  const req = require.context('../src/charts', true, /.stories.js$/)
  let stories = req.keys().map(filename => req(filename).default)
  return stories
}

configure(loadStories, module)
