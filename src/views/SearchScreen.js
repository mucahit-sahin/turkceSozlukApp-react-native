import React, { useState } from 'react'
import {
  Text,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Animated
} from 'react-native'
import Search from '../components/Search'
import Logo from '../components/icons/TdkLogo'
import Box from '../components/Box'
import bg from '../assets/bg.jpg'
import { useFocusEffect } from '@react-navigation/native'

function SearchScreen() {
  const [heroHeight] = React.useState(new Animated.Value(285))

  const [isSearchFocus, setSearchFocus] = useState(false)

  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(heroHeight, {
        toValue: 52 + 32,
        duration: 230
      }).start()
    } else {
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 230
      }).start()
    }
  }, [heroHeight, isSearchFocus])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content')
    }, [isSearchFocus])
  )
  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
      {/* Header */}
      <Box
        as={Animated.View}
        position="relative"
        zIndex={1}
        height={heroHeight}
      >
        {!isSearchFocus && (
          <Box
            as={ImageBackground}
            source={bg}
            style={{ width: '100%', height: '100%' }}
          >
            {/* logo */}
            <Box flex={1} alignItems="center" justifyContent="center">
              <Logo width={120} color="white" />
            </Box>
          </Box>
        )}

        {/* search */}
        <Box
          position="absolute"
          left={0}
          bottom={isSearchFocus ? 0 : -42}
          p={16}
          width="100%"
        >
          <Search onChangeFocus={(status) => setSearchFocus(status)} />
        </Box>
      </Box>

      {/* content */}
      <Box flex={1} bg="white" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box p={30} flex={1}>
            <Text>History</Text>
          </Box>
        ) : (
          <Box p={30} flex={1}>
            <Text>Öneri</Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchScreen
