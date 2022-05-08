import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import styles from './TextContent.module.css'

interface TextContentProps {
  userName: string
  publishedLabel: string
  title: string
}

const TextContentComponent: FC<TextContentProps> = ({ userName, publishedLabel, title }) => (
  <div className={styles.textContent}>
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img 
          className={styles.avatar}
          src="https://cdn-icons-png.flaticon.com/512/194/194938.png" 
          alt="avatar"  
        />
        <a href="#user-url" className={styles.username}>{userName}</a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано </span>
        {publishedLabel}
      </span>
    </div>
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink}>
        {title}
      </a>
    </h2>
  </div>
)

export const TextContent = hot(TextContentComponent)
