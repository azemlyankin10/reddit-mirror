import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import { Card } from './Card/Card'
import styles from './CardsList.module.css'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CardsListProps {}

const CardsListComponent: FC<CardsListProps> = () => (
  <ul className={styles.cardsList}>
    <Card />
  </ul>
)

export const CardsList = hot(CardsListComponent)
