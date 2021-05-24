import { Button, Cell, CellGroup } from 'vant'
import type { App } from 'vue'

/**
 * vant 配置
 * @param app
 */
export function setupVant (app: App<Element>): void {
  app
    .use(Button)
    .use(Cell)
    .use(CellGroup)
}
