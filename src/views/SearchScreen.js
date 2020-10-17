import React, { useState } from 'react'
import { StatusBar, SafeAreaView, Animated, FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import Search from '../components/Search'
import Logo from '../components/icons/TdkLogo'
import Box from '../components/Box'
import Bg from '../components/bg'
import {
  CardContainer,
  CardSummary,
  CardTitle
} from '../components/suggestion-card'
import Text from '../components/Text'
import { SimpleCardContainer, SimpleCardTitle } from '../components/simple-card'

const HERO_HEIGHT = 230

function SearchScreen({ navigation }) {
  const [bgOpacity] = React.useState(new Animated.Value(1))
  const [heroHeight] = React.useState(new Animated.Value(HERO_HEIGHT))
  const [isSearchFocus, setSearchFocus] = useState(false)

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 1',
      summary: 'açıklama 1'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item 2',
      summary: 'açıklama 2'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item 3',
      summary: 'açıklama 3'
    }
  ]

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
        <Box mt={-120} as={Animated.View} opacity={bgOpacity}>
          <Bg pt={120} pb={26}>
            {/* logo */}
            <Box flex={1} alignItems="center" justifyContent="center">
              <Logo width={120} color="white" />
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
          <Search onChangeFocus={(status) => setSearchFocus(status)} />
        </Box>
      </Box>

      {/* content */}
      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box flex={1}>
            <FlatList
              style={{ padding: 16 }}
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Box py={5}>
                  <SimpleCardContainer>
                    <SimpleCardTitle>{item.title}</SimpleCardTitle>
                  </SimpleCardContainer>
                </Box>
              )}
              ListHeaderComponent={
                <Text color="textLight" mb={10}>
                  Son Aramalar
                </Text>
              }
            />
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <Box>
              <Text color="textLight">Bir deyim</Text>
              <CardContainer
                mt={10}
                onPress={() => navigation.navigate('Details')}
              >
                <CardTitle>on para</CardTitle>
                <CardSummary>çok az para</CardSummary>
              </CardContainer>
            </Box>
            <Box mt={30}>
              <Text color="textLight">Bir deyim - Atasözü</Text>
              <CardContainer mt={10}>
                <CardTitle>siyem siyem ağlamak</CardTitle>
                <CardSummary>ince ince, hafif hafif</CardSummary>
              </CardContainer>
            </Box>

            {/*<FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Box py={5}>
                  <CardContainer>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSummary>{item.summary}</CardSummary>
                  </CardContainer>
                </Box>
              )}
              keyExtractor={(item) => item.id}
              />*/}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchScreen
