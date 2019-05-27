import PaButtonPlugin, { PaButton } from './button'
import PaLabelPlugin, { PaLabel } from './label'
import PaIconPlugin, { PaIcon } from './icon'
import PaTablePlugin, { PaTable } from './table'

const plugins: {[name: string]: any,} = {
  PaButtonPlugin,
  PaLabelPlugin,
  PaIconPlugin,
  PaTablePlugin
}

const elements = {
  PaButton,
  PaLabel,
  PaIcon,
  PaTable
}

export {
  elements,
  plugins
}
