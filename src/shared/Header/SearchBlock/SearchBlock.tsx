import React, { FC } from 'react'
import styles from './SearchBlock.module.css'
import { UserBlock } from './UserBlock/UserBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SearchBlockProps {}

const SearchBlock: FC<SearchBlockProps> = () => (
  <div className={styles.searchBlock}>
    SearchBlock Component
    <UserBlock />
  </div>
)

export default SearchBlock


