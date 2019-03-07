import { configure, addParameters } from '@storybook/vue'
import { themes } from '@storybook/theming'
import Vue from 'vue'
import Vuex from 'vuex'
import options from './options'

Vue.use(Vuex)

// Option defaults:
addParameters({
  options
})

function loadStories() {
  require('../src/stories')
  const req = require.context(
  '../src/components',
  true, /.stories.js$/)
  req.keys().forEach(
    filename => req(filename))
}

configure(loadStories, module)
