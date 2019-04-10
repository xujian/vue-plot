import { storiesOf } from '@storybook/vue'
import { boolean, number, text } from '@storybook/addon-knobs'

let stories = storiesOf('Charts|Treemap', module)
// stories.addDecorator(withTheme)

let states = [
  {
    name: 'Simple',
    template: `<pa-treemap-chart
    :data="'mocks:treemap-simple'"
    ></pa-treemap-chart>`
  }
]

states.forEach(s => {
  stories.add(s.name, () => ({
    template: s.template,
    props: {
    }
  }))
})

export default stories
