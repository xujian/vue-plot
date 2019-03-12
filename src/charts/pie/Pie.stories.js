import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import PaPieChart from './Pie'

let stories = storiesOf('Components|Charts|BarChart', module)
stories.addDecorator(withKnobs)

let states = [
  {
    name: 'Normal',
    template: `<pa-pie-chart
    ></pa-pie-chart>`
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
      components: { PaPieChart },
      props: {
      },
      template: s.template
    }
  })
})
