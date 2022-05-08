import React, { FC } from 'react'
import styles from './Content.module.css'

interface IContentProps {
  children?: React.ReactNode
}

const Content: FC<IContentProps> = ({children}) => (
  <main className={styles.content}>
    {children}
  </main>
)

export default Content
