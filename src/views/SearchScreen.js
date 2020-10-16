import React, { useState } from 'react'
import { Text, ImageBackground, StatusBar, SafeAreaView } from 'react-native'
import Search from '../components/Search'
import Logo from '../components/icons/TdkLogo'
import Box from '../components/Box'
import bg from '../assets/bg.jpg'
import { useFocusEffect } from '@react-navigation/native'

function SearchScreen() {
  const [isSearchFocus, setSearchFocus] = useState(false)

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content')
    }, [isSearchFocus])
  )
  return (
    <Box as={SafeAreaView} bg="red" flex={1}>
      <StatusBar barStyle="light-content" />
      <Box position="relative" zIndex={1} height={isSearchFocus ? 1 : 300}>
        <Box
          as={ImageBackground}
          source={bg}
          style={{ width: '100%', height: '100%' }}
        >
          <Box flex={1} alignItems="center" justifyContent="center">
            <Logo width={120} color="white" />
          </Box>
          <Box p={16} width="100%" mb={-42}>
            <Search onChangeFocus={(status) => setSearchFocus(status)} />
          </Box>
        </Box>
      </Box>
      {/*content*/}
      <Box flex={1} bg="white" pt={26}>
        <Box p={30} flex={1}>
          <Text>Hello</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default SearchScreen
