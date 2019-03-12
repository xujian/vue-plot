import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import PaLineChart from './Line'

let stories = storiesOf('Components|Charts|LineChart', module)
stories.addDecorator(withKnobs)

let states = [
  {
    name: 'Normal',
    template: `<pa-line-chart
    ></pa-line-chart>`
  }
]

// 代入动态story template
stories.addDecorator((storyFn, context) => {
  let story = storyFn()
  let sourceFn = withStorySource(story.template)
  return sourceFn(storyFn, context)
})

states.forEach(s => {
  stories.add(s.name, () => {
    return {
      components: { PaLineChart },
      props: {
      },
      template: s.template
    }
  })
})
