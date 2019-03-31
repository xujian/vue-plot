import { configure, addParameters } from '@storybook/vue'
import options from './options'
import './global.css'

// Option defaults:
addParameters({
  options
})

function loadStories() {
  require('../src/stories')
  const req = require.context(
  '../src/charts',
  true, /.stories.js$/)
  req.keys().forEach(
    filename => req(filename))
}

configure(loadStories, module)
