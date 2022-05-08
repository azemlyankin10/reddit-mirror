import React from 'react'
import { Icon, EIcons } from '../../../../Icon/Icon'
import Styles from './List.module.css'

const classNameElementsDesctop = `${Styles.dropdownItem} ${Styles.dropdownItemWithIcon} ${Styles.mobHide}` 
const classNameElementsMobile = `${Styles.dropdownItem} ${Styles.dropdownItemWithIcon}` 
const classNameElementClose = `${Styles.dropdownItem} ${Styles.close}`

export const list = [
  {
    As: 'button' as const, 
    listElement: <><Icon name={EIcons.comment} className={Styles.icon} />Комментарии</>,  
    className: classNameElementsDesctop
  },
  {
    As: 'button' as const, 
    listElement: <><Icon name={EIcons.share} className={Styles.icon} />Поделиться</>,
    className: classNameElementsDesctop
  },
  {
    As: 'button' as const, 
    listElement: <><Icon name={EIcons.hide} className={Styles.icon} />Скрыть</>, 
    className: classNameElementsDesctop
  },
  {
    As: 'button' as const, 
    listElement: <><Icon name={EIcons.save} className={Styles.icon} />Сохранить</>, 
    className: classNameElementsMobile
  },
  {
    As: 'button' as const, 
    listElement: <><Icon name={EIcons.complein} className={Styles.icon} />Пожаловаться</>, 
    className: classNameElementsMobile
  },
  {
    As: 'button' as const, 
    listElement: 'Закрыть', 
    className: classNameElementClose
  },
]