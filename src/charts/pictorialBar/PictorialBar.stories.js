import { storiesOf } from '@storybook/vue'
import { text, number, array } from '@storybook/addon-knobs'

let stories = storiesOf('基本图表|PictorialBar', module)

let states = [
  {
    name: 'Simple',
    template: `<pa-pictorialBar-chart
    :title="'冰山图'"
    :area="[{ color: 'gradient:#20B7E2;rgba(31,180,221,0)'}]"
    :data="'mocks:pictorialBar-simple'"
    >
    </pa-pictorialBar-chart>`
  },
  {
    name: 'With line',
    template: `<pa-pictorialBar-chart
    :data="'mocks:pictorialBar-simple'"
    >
    <pa-line-chart
    :data="[
      [56, 23, 45, 78, 38]
    ]"
    ></pa-line-chart>
    </pa-pictorialBar-chart>`
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
