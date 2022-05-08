import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import styles from './Controls.module.css'

interface ControlsProps {
  children?: React.ReactNode
}

const ControlsComponenet: FC<ControlsProps> = ({ children }) => (
  <div className={styles.controls}>
    {children}
  </div>
)

export const Controls = hot(ControlsComponenet)
