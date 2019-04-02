import { withCode } from 'storybook-addon-chartlib'

export default (storyFn, context) => {
  let Story = storyFn()
  let storyComponent = new Story()
  console.log('withLiveCode....-----------', context)
  let code = '正在加载'
  try {
    code = storyComponent.$options.STORYBOOK_WRAPS.extendOptions.template
  } catch (e) {
    console.info('Get template error', e.message)
  }
  let sourceFn = withCode(code)
  return sourceFn(storyFn, context)
}
