import { iconByName, UnknownIcon } from '../assets/icons'

export function getProductIcon(iconName) {
  return iconByName[iconName] ?? UnknownIcon
}
