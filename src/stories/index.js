import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'
import population from './population' // 业务图表/人口
import gdp from './gdp' // 业务图表/经济指标

import Welcome from './Welcome.vue'

storiesOf('Welcome', module).add('Welcome', () => ({
  render: h => h(Welcome, { props: { goToButton: linkTo('Button') } })
}))
