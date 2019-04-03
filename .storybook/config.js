import Vue from 'vue'
import { configure, addParameters } from '@storybook/vue'
import options from './options'
import ChartLib from '../src/index'
import './global.css'

// Option defaults:
addParameters({
  options
})

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
