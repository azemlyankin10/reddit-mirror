import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import { Icon, EIcons } from '../../../Icon/Icon'
import styles from './UserBlock.module.css'

interface UserBlockProps {
  avatarSrc?: string
  username?: string
}

const UserBlockComponent: FC<UserBlockProps> = ({ avatarSrc, username }) => (
  <a 
    href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
    className={styles.userBox}
  >
    <div className={styles.avatarBox}>
      {
        avatarSrc
          ? <img src={avatarSrc} alt="user-avatar" className={styles.avatarImage} />
          : <Icon name={EIcons.user} size={50} viewBox='0 0 50 50' />
      }
    </div>

    <span className={styles.username}>
      { username || 'Аноним' }
    </span>
  </a>
)

export const UserBlock = hot(UserBlockComponent)
