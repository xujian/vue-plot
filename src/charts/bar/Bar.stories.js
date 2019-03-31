import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { withStorySource } from '@storybook/addon-storysource'
import PaBarChart from './Bar.ts'

let stories = storiesOf('Components|BarChart', module)
stories.addDecorator(withKnobs)

let states = [
  {
    name: 'Simple',
    template: `<pa-bar-chart
    :round="round"
    :bar-width="barWidth"
    :data="[
      [100, 150, 500, 250, 400],
      [47, 100, 100, 430, 210]
    ]"
    ></pa-bar-chart>`
  }
]

// 代入动态story template
stories.addDecorator((storyFn, context) => {
  let story = storyFn()
  console.log('story.addDecorator--------------------------', story, context)
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
