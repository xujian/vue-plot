import { storiesOf } from '@storybook/vue'
import withLiveCode from '../../../.storybook/decorators/withLiveCode'
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs'
import PaLinesChart from './Lines.ts'

let stories = storiesOf('基本图表|Lines', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withLiveCode)

let states = [
  {
    name: 'Simple',
    template: `<pa-lines-chart
      :data="'mocks:lines-simple'"
      ></pa-lines-chart>`,
  },
]

states.forEach(s => {
  stories.add(s.name, () => ({
    components: { PaLinesChart },
    template: s.template,
    props: {},
  }))
})

export default stories
