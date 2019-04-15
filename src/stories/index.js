import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'
import population from './population' // 义务图表/人口

import Welcome from './Welcome.vue'

storiesOf('Welcome', module).add('Welcome', () => ({
  render: h => h(Welcome, { props: { goToButton: linkTo('Button') } })
}))
