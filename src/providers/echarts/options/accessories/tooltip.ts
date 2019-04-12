export default (props: any, providerOptions: any) => {
  console.log('accessories-tooltip_________________')
  providerOptions.tooltip = {
    show: true,
    positon: props.positon,
    // backgroundColor: props.style.backgroundColor || ''
  }
}
