declare type configData = {
  theme: string,
  themes: string[]
}
/**
 * 应用于所有图表的底层配置
 */
let globalConfigs = {
  theme: 'cold',
  themes: ['dark', 'cold', 'warm']
}

export default globalConfigs

export const setGlobalConfigs = (configs: any) => {
  Object.assign(globalConfigs, configs)
}
