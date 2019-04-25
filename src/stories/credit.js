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

stories.add('商事主体类型分布', () => ({
  template: `<pa-pie-chart
  :title="'企业产业分布图'"
  :preset="'no-legend,rich-label-percent'"
  :colors="['#f39800', '#1f88ff', '#28c56f', '#fc4e59']"
  :styles="{ border: true }"
  :data="[[{
      value: 1114725,
      name: '个体工商户'
    }, {
      value: 68243,
      name: '外商投资企业'
    }, {
      value: 1909855,
      name: '内资企业'
    }, {
      value: 42977,
      name: '其他类型'
    }]]"
  ></pa-pie-chart>`
}))
