import { storiesOf } from '@storybook/vue'
import { text, number, array } from '@storybook/addon-knobs'

let stories = storiesOf('基本图表|Gauge', module)

let states = [
  {
    name: 'Simple',
    template: `<pa-gauge-chart

    :title="'仪表盘'"
    :radius="[90]"
    :center="[['50%','60%']]"
    :title-name="['完成率']"
    :data="[50]"
    :start-end-angle="[[180,0]]"
    :gauge-gradient-color="['#5C4BE7','#3C7AE3','#239FDF']"
    ></pa-gauge-chart>`
  }
]

states.forEach(s => {
  stories.add(s.name, () => ({
    template: s.template,
    props: {
      // startAngle: {
      //   default: number('startAngle', 225)
      // },
      // endAngle: {
      //   default: number('endAngle', -45)
      // }
    }
  }))
})
export default stories
