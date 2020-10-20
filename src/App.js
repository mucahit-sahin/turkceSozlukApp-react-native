import * as React from 'react'
import { SafeAreaView } from 'react-native'
import { ThemeProvider } from 'styled-components'

import Box from './components/Box'
import theme from './utils/theme'
import Navigation from './navigation'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} as={SafeAreaView}>
        <Navigation />
      </Box>
    </ThemeProvider>
  )
}
