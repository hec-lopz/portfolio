import {
  IconDefinition,
  IconName,
  findIconDefinition,
  library,
} from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { ProjectIcon } from '../models/Markdown.model'

library.add(fab)

export function createBrandIcons(
  brands: { label: string; icon: string }[]
): ProjectIcon[] {
  const iconDefinitions = brands.map(({ label, icon }) => ({
    label,
    icon: findIconDefinition({ prefix: 'fab', iconName: icon as IconName }),
  }))

  return iconDefinitions
}
