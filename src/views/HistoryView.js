import React from 'react'
import { Platform, StatusBar, Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

function HistoryView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>History Screen</Text>
    </View>
  )
}

export default HistoryView
