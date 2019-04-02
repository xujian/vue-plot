import { withKnobs, boolean, text } from '@storybook/addon-knobs'

export default (storyFn, context) => {
  let propsFn = withKnobs({})
  return propsFn(storyFn, context)
}
