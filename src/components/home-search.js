import React from 'react'
import { Animated } from 'react-native'

import Bg from './bg'
import Box from './Box'
import { TdkLogo } from './icons'
import Search from './Search'

const HERO_HEIGHT = 230
function HomeSearch({ isSearchFocus, onSearchFocus }) {
  const [bgOpacity] = React.useState(new Animated.Value(1))
  const [heroHeight] = React.useState(new Animated.Value(HERO_HEIGHT))

  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(bgOpacity, {
        // bgOpacity
        toValue: 0,
        duration: 230
      }).start()
      Animated.timing(heroHeight, {
        // hero-height
        toValue: 52 + 32,
        duration: 230
      }).start()
    } else {
      Animated.timing(bgOpacity, {
        // bgOpacity
        toValue: 1,
        duration: 230
      }).start()
      Animated.timing(heroHeight, {
        // hero-height
        toValue: HERO_HEIGHT,
        duration: 230
      }).start()
    }
  }, [heroHeight, bgOpacity, isSearchFocus])

  return (
    <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
      <Box mt={-120} as={Animated.View} opacity={bgOpacity}>
        <Bg pt={120} pb={26}>
          {/* logo */}
          <Box flex={1} alignItems="center" justifyContent="center">
            <TdkLogo width={120} color="white" />
          </Box>
        </Bg>
      </Box>

      {/* search */}
      <Box
        position="absolute"
        left={0}
        bottom={isSearchFocus ? 0 : -42}
        p={16}
        width="100%"
      >
        <Search onChangeFocus={(status) => onSearchFocus(status)} />
      </Box>
    </Box>
  )
}

export default HomeSearch
