import { storiesOf } from '@storybook/vue'

let stories = storiesOf('业务图表|商事信用', module)

stories.add('产业分布', () => ({
  template: `<pa-pie-chart
  :title="'企业产业分布图'"
  :preset="'circle,no-legend,rich-label-percent'"
  :data="[[{
      value: 4908,
      name: '第一产业'
    }, {
      value: 249636,
      name: '第二产业'
    }, {
      value: 2696672,
      name: '第三产业'
    }]]"
  ></pa-pie-chart>`
}))
