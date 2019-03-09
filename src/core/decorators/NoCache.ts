import { createDecorator } from 'vue-class-component'

const NoCache = createDecorator((
  options: any = {}, key) => {
  options.computed[key].cache = false
})

export default NoCache