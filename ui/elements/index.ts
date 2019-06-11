import PaButtonPlugin, { PaButton } from './button'
import PaLabelPlugin, { PaLabel } from './label'
import PaIconPlugin, { PaIcon } from './icon'
import PaTablePlugin, { PaTable } from './table'
import PaBoardPlugin, { PaBoard } from './board'
import PaBoxPlugin, { PaBox } from './box'
import PaMarqueePlugin, { PaMarquee } from './marquee'

const plugins: { [name: string]: any } = {
  PaButtonPlugin,
  PaLabelPlugin,
  PaIconPlugin,
  PaTablePlugin,
  PaBoardPlugin,
  PaBoxPlugin,
  PaMarqueePlugin,
}

const elements = {
  PaButton,
  PaLabel,
  PaIcon,
  PaTable,
  PaBoard,
  PaBox,
  PaMarquee,
}

export {
  elements,
  plugins
}
