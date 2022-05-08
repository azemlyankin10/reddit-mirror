import { commentIcon } from './comment'
import { compleinIcon } from './complein'
import { eyeIcon } from './eye'
import { hideIcon } from './hide'
import { saveIcon } from './save'
import { shareIcon } from './share'
import { userIcon } from './user'

export const enum EIcons { comment, complein, eye, hide, save, share, user }

export const icon = (name: EIcons) => {
  switch (name) {
    case EIcons.comment:
      return commentIcon()
    case EIcons.complein:
      return compleinIcon()
    case EIcons.eye:
      return eyeIcon()  
    case EIcons.hide:
      return hideIcon()  
    case EIcons.save:
      return saveIcon()   
    case EIcons.share:
      return shareIcon()  
    case EIcons.user:
      return userIcon()  
  }
}