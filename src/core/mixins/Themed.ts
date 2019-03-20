/**
 * 可受控于theme改变样式
 */
type ThemedConstructor<T = {}> = new (...args: any[]) => T;

function Themed<TBase extends ThemedConstructor>(Base: TBase) {
  return class extends Base {
    /**
     * 应用theme
     * @param theme name of theme
     */
    applyTheme(theme: string): void {
      console.log('Themed--------------', theme)
    }
  }
}