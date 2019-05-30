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

stories.add('社会经济运行关系', () => ({
  template: `<pa-line-chart
  preset="legend-right-vertical"
  :y="false"
  :legend="'商事主体存量值,社会投融资总额,GDP,税收收入,财政收入,就业人口'.split(',')"
  :x="'2014,2015,2016,2017,2018'.split(',')"
  :gap="false"
  :data="[
    [0.2489, 0.3763, 0.5394, 0.6928, 0.8],
    [0.3378, 0.4313, 0.557, 0.7292, 0.9],
    [0.1606, 0.2226, 0.3047, 0.4264, 0.5],
    [0.2052, 0.3836, 0.4584, 0.5156, 0.6],
    [0.2886, 0.4708, 0.5865, 0.6418, 0.7],
    [0.1581, 0.2033, 0.2655, 0.3506, 0.64]
  ]">
    <pa-tooltip :data="[
      [1492291, 1916000, 2458174, 2968027, 3324576].map(x => x + '户'),
      [2717.42, 3298.31, 4078.16, 5147.32, 6207.67].map(x => x + '亿元'),
      [16001.98, 17502.99, 19492.6, 22438.39, 24221.98].map(x => x + '亿元'),
      [1754.84, 2272.23, 2488.88, 2654.89, 2899.6].map(x => x + '亿元'),
      [2082.44, 2727.06, 3136.42, 3332.13, 3538].map(x => x + '亿元'),
      [899.66, 906.14, 926.38, 959.29, 1128].map(x => x + '万人')
    ]"></pa-tooltip>
  </pa-line-chart>`
}))

stories.add('企业活跃度行业分布图', () => ({
  template: `<pa-radar-chart
    :x="[
      '卫生和社会',
      '农、林、牧、副、渔业',
      '文化、教育和娱乐业',
      '交通运输、仓储和邮政业',
      '金融业',
      '教育',
      '房地产业',
      '水利、环境和公共设施管理业'
    ]"
    :y="{
      unit: '%',
      max: 100
    }"
    :data="[
      [{
          value: [91.36, 87.78, 87.99, 88.65, 89.39, 89.4, 90.03, 90.87],
          name: '2018'
      }]
    ]"></pa-radar-chart>`
}))

stories.add('企业活跃度与企业年龄', () => ({
  template: `<pa-line-chart
  :preset="'area-gradient'"
  :smooth="true"
  :gap="false"
  :area="[{ color: 'gradient:#5045f6;rgba(0,0,0,0)' }]"
  :x="'1,2,3,4,5,6,7,8,9,10,10年以上'.split(',')"
  :y="{ min: 75, max: 90, unit: '%' }"
  :data="[
    [86.69, 81.24, 80.96, 78.15, 82.14, 82.35, 84.61, 84.63, 85.51, 85.56, 85.67]
  ]"
  ></pa-line-chart>`
}))
