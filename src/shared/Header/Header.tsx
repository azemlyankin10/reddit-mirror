import React, { FC } from 'react'
import styles from './Header.module.css'
import SearchBlock from './SearchBlock/SearchBlock'
import SortBlock from './SortBlock/SortBlock'
import ThreadTitle from './ThreadTitle/ThreadTitle'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {
  // token: string
}

const Header: FC<HeaderProps> = () => {
  
  return (
    <div className={styles.header}>
        <SearchBlock />
        <ThreadTitle />
        <SortBlock />
    </div>
  )
}

export default Header
