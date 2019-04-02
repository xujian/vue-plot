import { configure, addParameters } from '@storybook/vue'
import options from './options'
import './global.css'
import withLiveCode from './decorators/withLiveCode'

// Option defaults:
addParameters({
  options
})

function loadStories() {
  require('../src/stories')
  const req = require.context(
  '../src/charts',
  true, /.stories.js$/)
  let stories = req.keys().forEach(
    filename => {
      let stories = req(filename).default
      stories.addDecorator(withLiveCode)
      return stories
    }
  )
  return stories
}

configure(loadStories, module)
