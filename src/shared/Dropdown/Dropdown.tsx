import React, { FC, useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import styles from './Dropdown.module.css'

interface DropdownProps {
  button: React.ReactNode
  children: React.ReactNode
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
  listClassName?: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

const DropdownComponent: FC<DropdownProps> = ({ button, children, isOpen, onClose = noop, onOpen = noop, listClassName = '' }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
  useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  const handleOpen = () => {
    if(isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        { button }
      </div>
      {
        isDropdownOpen && (
          <div className={styles.listContainer}>
            <div className={`${styles.list} ${listClassName}`} onClick={() => setIsDropdownOpen(false)}>
              { children }
            </div>
          </div>
        )
      }
    </div>
  )
}

export const Dropdown = hot(DropdownComponent)
