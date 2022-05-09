import { commentIcon } from './comment'
import { compleinIcon } from './complein'
import { eyeIcon } from './eye'
import { hideIcon } from './hide'
import { saveIcon } from './save'
import { shareIcon } from './share'
import { userIcon } from './user'

export const enum EIcons { comment, complein, eye, hide, save, share, user }

export const icons = {
  [EIcons.comment]: commentIcon,
  [EIcons.complein]: compleinIcon,
  [EIcons.eye]: eyeIcon,
  [EIcons.hide]: hideIcon,
  [EIcons.save]: saveIcon,
  [EIcons.share]: shareIcon,
  [EIcons.user]: userIcon,
}