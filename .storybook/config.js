import Vue from 'vue'
import { configure, addParameters, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import options from './options'
import ChartLib from '../src/index'
import withLiveCode from './decorators/withLiveCode'
import withProps from './decorators/withProps'
import './global.css'

// Option defaults:
addParameters({
  options
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
