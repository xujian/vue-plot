import PaButtonPlugin, { PaButton } from './button'
import PaLabelPlugin, { PaLabel } from './label'
import PaIconPlugin, { PaIcon } from './icon'
import PaTablePlugin, { PaTable } from './table'
import PaBoardPlugin, { PaBoard } from './board'

const plugins: {[name: string]: any,} = {
  PaButtonPlugin,
  PaLabelPlugin,
  PaIconPlugin,
  PaTablePlugin,
  PaBoardPlugin
}

const elements = {
  PaButton,
  PaLabel,
  PaIcon,
  PaTable,
  PaBoard
}

export {
  elements,
  plugins
}
