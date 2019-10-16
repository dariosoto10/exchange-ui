import React, {Fragment} from 'react'

import Body from './components/body'
import GlobalStyle from './styles/globalStyles'
import Header from './components/header'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

const app = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Header />
        <Body />
      </Fragment>
    </ThemeProvider>
  )
}

export default app
