import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import styles from './Layout.module.css'

interface LayoutProps {
  children: React.ReactNode
}

const LayoutComponent: FC<LayoutProps> = ({children}) => (
  <div className={styles.Layout}>
    {children}
  </div>
)

export const Layout = hot(LayoutComponent)
