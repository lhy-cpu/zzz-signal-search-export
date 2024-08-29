import * as IconComponents from '@element-plus/icons-vue'

const weaponTypeNames = new Set([
  '音擎'
])

const banboTypeNames = new Set([
  '邦布'
])

const characterTypeNames = new Set([
  '代理人'
])

const isCharacter = (name) => characterTypeNames.has(name)
const isWeapon = (name) => weaponTypeNames.has(name)

const isBanbo = (name) => banboTypeNames.has(name)

const IconInstaller = (app) => {
  Object.values(IconComponents).forEach(component => {
    app.component(component.name, component)
  })
}

export {
  isWeapon,
  isCharacter,
  isBanbo,
  IconInstaller,
}