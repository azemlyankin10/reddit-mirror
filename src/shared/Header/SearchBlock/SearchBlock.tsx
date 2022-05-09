import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import styles from './SearchBlock.module.css'
import { UserBlock } from './UserBlock/UserBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SearchBlockProps {
  // token: string
}



const SearchBlock: FC<SearchBlockProps> = () => {

  return (
    <div className={styles.searchBlock}>
      SearchBlock Component
      <UserBlock/>

    </div>
  )
}

export default SearchBlock


