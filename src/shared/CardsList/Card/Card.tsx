import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import styles from './Card.module.css'
import { Actions } from './Controls/Actions/Actions'
import { Comments } from './Controls/Comments/Comments'
import { Controls } from './Controls/Controls'
import { KarmaCounter } from './Controls/KarmaCounter/KarmaCounter'
import { Menu } from './Menu/Menu'
import { Preview } from './Preview/Preview'
import { SaveButton } from './Controls/Actions/SaveButton/SaveButton'
import { ShareButton } from './Controls/Actions/ShareButton/ShareButton'
import { TextContent } from './TextContent/TextContent'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CardProps {}

const CardComponent: FC<CardProps> = () => (
  <li className={styles.card}>

    <TextContent 
      userName='Мария Белова'
      publishedLabel='4 часа назад'
      title='Банальные, но неопровержимые выводы, а также многие известные личности лишь добавляют фракционных разногласий и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Таким образом, постоянное информационно-пропагандистское обеспечение нашей деятельности является качественно новой ступенью прогресса профессионального сообщества.'
    />

    <Preview 
      imgSrc='https://cdn.dribbble.com/userupload/2666039/file/original-15beaf8a682a3c14cc8ef25404a3ea43.jpg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=2400x1800'
    />

    <Menu cardId={11} />

    <Controls>
      <KarmaCounter karma={11} />
      <Comments commentsCount={2} />

      <Actions>
        <ShareButton />
        <SaveButton />
      </Actions>
    </Controls>
    
  </li>
)

export const Card = hot(CardComponent)
