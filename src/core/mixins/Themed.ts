/**
 * 可受控于theme改变样式
 */
type Constructor<T = {}> = new (...args: any[]) => T;

function Themed<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    /**
     * 应用theme
     * @param theme name of theme
     */
    applyTheme (theme: string): void {
      console.log('Themed--------------', theme)
    }
  };
}