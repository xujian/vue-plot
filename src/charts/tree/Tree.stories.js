import { storiesOf } from '@storybook/vue'
import { boolean, number, text } from '@storybook/addon-knobs'

let stories = storiesOf('Charts|Tree', module)
// stories.addDecorator(withTheme)

let states = [
  {
    name: 'Simple',
    template: `<pa-tree-chart
    :data="'mocks:tree-simple'"
    ></pa-tree-chart>`
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
