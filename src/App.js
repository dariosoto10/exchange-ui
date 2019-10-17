import Body from './components/body'
import Container from './styles/container'
import GlobalStyle from './styles/globalStyles'
import Header from './components/header'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

const app = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Header />
        <Body />
      </Container>
    </ThemeProvider>
  )
}

export default app
