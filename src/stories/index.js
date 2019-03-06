import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'

import Welcome from './Welcome.vue'

storiesOf('Welcome', module).add('Welcome', () => ({
  render: h => h(Welcome, { props: { goToButton: linkTo('Button') } })
}))
