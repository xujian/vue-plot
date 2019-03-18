import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import PaBarChart from './Bar'

let stories = storiesOf('Components|Charts|BarChart', module)
stories.addDecorator(withKnobs)

let states = [
  {
    name: 'Normal',
    template: `<pa-bar-chart
    :round="round"
    :bar-width="barWidth"
    ></pa-bar-chart>`
  }
]

// 代入动态story template
stories.addDecorator((storyFn, context) => {
  let story = storyFn()
  let sourceFn = withStorySource('<h1>Demo</h1>')
  return sourceFn(storyFn, context)
})

states.forEach(s => {
  stories.add(s.name, () => {
    return {
      components: { PaBarChart },
      props: {
        round: {
          type: Boolean,
          default: boolean('round', false)
        },
        barWidth: {
          type: Number,
          default: 10
        }
      },
      template: s.template
    }
  })
})
