import React, { useEffect, useState } from 'react'
import './globalCss/main.global.css'
import { hot } from 'react-hot-loader/root'
import { Layout } from './shared/Layout/Layout'
import Header from './shared/Header/Header'
import Content from './shared/Content/Content'
import { CardsList } from './shared/CardsList/CardsList'
import { useToken } from './utils/hooks/useToken'

const AppComponent = () => {
    // const [token, setToken] = useState('')
    
    useEffect(() => {
      console.log('1')
    }, [])
// console.log(token)


  return (
    <Layout>
      <Header/>
      <Content> 
        <CardsList />
      </Content>
    </Layout>
  )
}

export const App = hot(AppComponent)




//genarete new component -> npx generate-react-cli component name