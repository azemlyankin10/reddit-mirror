import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import styles from './Actions.module.css'

interface ActionsProps {
  children?: React.ReactNode
}

const ActionsComponent: FC<ActionsProps> = ({ children }) => (
  <div className={styles.actions}>
    {children}
  </div>
)

export const Actions = hot(ActionsComponent)
