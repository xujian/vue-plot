import Vue from 'vue'
import { configure, addParameters, addDecorator } from '@storybook/vue'
import addons, { makeDecorator } from '@storybook/addons'
import { withKnobs } from '@storybook/addon-knobs'
import options from './options'
import Chartlib from '../src'
import Uilib from '../ui'
import Service from '../src/Service'
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
  defaultTheme: 'dark'
}
// Option defaults:
addParameters({
  options,
  themesOptions
})

addDecorator(withKnobs)
addDecorator(withLiveCode)
addDecorator(makeDecorator({
  name: 'withTheme',
  wrapper: (storyFn, context, { parameters }) => {
    const channel = addons.getChannel()
    channel.on('storybook-addon-chartlib/theme-changed', (data) => {
      console.log('config.js!!!!!!withTheme-onononononononononon--storybook-addon-chartlib/theme-changed', data)
      Service.instance.theme = data.theme
    })
    return storyFn(context);
  }
}))

Vue.use(Chartlib, {
  theme: 'dark'
})

Vue.use(Uilib)

function loadStories() {
  require('../src/stories')
  const chartContext = require.context('../src/charts', true, /.stories.js$/)
  let chartStories = chartContext.keys().map(filename => chartContext(filename).default)
  const uiContext = require.context('../ui', true, /.stories.js$/)
  let uiStories = uiContext.keys().map(filename => uiContext(filename).default)
  return [...chartStories, ...uiStories]
}

configure(loadStories, module)
