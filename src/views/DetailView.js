import { useFocusEffect } from '@react-navigation/native'
import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'

import Box from '../components/Box'
import Text from '../components/Text'

function DetailView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )
  return (
    <Box as={SafeAreaView} bg="softRed" flex={1} p={16}>
      <Text>Detay</Text>
    </Box>
  )
}
export default DetailView
