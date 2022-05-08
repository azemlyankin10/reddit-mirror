import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import { Dropdown } from '../../../Dropdown/Dropdown'
import { GenericList } from '../../../GenericList/GenericList'
import { list } from './List/List'
import styles from './Menu.module.css'

const btn = (
  <button className={styles.menuButton}>
    <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
      <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
      <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
    </svg>
  </button>
)

interface MenuProps {
  cardId?: number | string
}

const MenuComponent: FC<MenuProps> = ( { cardId } ) => {

  const DropdownList = list .map((obj, index) => {
    return {...obj, id: index.toString(), onClick: () => console.log(cardId)}
  })

  return (
    <div className={styles.menu}>
    <Dropdown
      button={btn}
      listClassName={styles.dropdownList}
    >
      <GenericList list={DropdownList}/>
    </Dropdown>

  </div>
  )
}


export const Menu = hot(MenuComponent)
