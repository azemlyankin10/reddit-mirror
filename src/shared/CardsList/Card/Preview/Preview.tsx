import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import styles from './Preview.module.css'

interface PreviewProps {
  imgSrc: string
}

const PreviewComponent: FC<PreviewProps> = ({ imgSrc }) => (
  <div className={styles.preview}>
    <img
      className={styles.previewImg} 
      src={imgSrc}
      alt="img" 
    />
  </div>
)

export const Preview = hot(PreviewComponent)
