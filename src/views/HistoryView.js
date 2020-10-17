import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import Text from '../components/Text'
import Box from '../components/Box'

function HistoryView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )
  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>Arama Geçmişi</Text>
    </Box>
  )
}

export default HistoryView
