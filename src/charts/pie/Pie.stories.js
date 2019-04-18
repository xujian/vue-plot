import { storiesOf } from '@storybook/vue'
import withLiveCode from '../../../.storybook/decorators/withLiveCode'
import { withKnobs, boolean, number, text, array } from '@storybook/addon-knobs'
import PaPieChart from './Pie.ts'
import PaRingChart from './Ring.ts'

let stories = storiesOf('基本图表|Pie', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withLiveCode)

let states = [
  {
    name: 'Simple',
    template: `<pa-pie-chart
      :data="[[
        { name: 'A', value: 100 },
        { name: 'B', value: 150 },
        { name: 'C', value: 500 },
        { name: 'D', value: 250 },
        { name: 'E', value: 400 }
      ]]"
      ></pa-pie-chart>`
  },
  {
    name: 'Circle',
    template: `<pa-pie-chart
      :title="'生源组成'"
      :preset="'circle,no-legend,rich-label'"
      :data="[[{
          value: 4981,
          name: '曲阜师范大学'
        }, {
          value: 1354,
          name: '潍坊学院'
        }, {
          value: 2105,
          name: '青岛职业技术学院'
        }, {
          value: 3915,
          name: '淄博师范高等专科'
        }, {
          value: 2354,
          name: '鲁东大学'
        }, {
          value: 3290,
          name: '山东师范大学'
        }]]"
      ></pa-pie-chart>`
  },
  {
    name: 'Ring',
    template: `<pa-ring-chart
      :title="'生源组成'"
      :radius="['40%', '80%']"
      :data="[[{
          value: 4981,
          name: '曲阜师范大学'
        }, {
          value: 1354,
          name: '潍坊学院'
        }, {
          value: 2105,
          name: '青岛职业技术学院'
        }, {
          value: 3915,
          name: '淄博师范高等专科'
        }, {
          value: 2354,
          name: '鲁东大学'
        }, {
          value: 3290,
          name: '山东师范大学'
        }]]"
      ></pa-ring-chart>`
  }
]

states.forEach(s => {
  stories.add(s.name, () => ({
    components: { PaPieChart, PaRingChart },
    template: s.template,
    props: {
    }
  }))
})

export default stories
