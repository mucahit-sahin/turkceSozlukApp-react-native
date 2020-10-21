import React, { useState } from 'react'
import { StatusBar, SafeAreaView, Animated } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/Box'
import { SuggestionCard } from '../components/suggestion-card'
import SearchHistoryList from '../components/search-history-list'
import HomeSearch from '../components/home-search'

function SearchScreen({ navigation }) {
  const [isSearchFocus, setSearchFocus] = useState(false)
  const [homeData, setHomeData] = React.useState(null)

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik')
    const data = await response.json()
    setHomeData(data)
  }

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
    getHomeData()
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content')
    }, [isSearchFocus])
  )
  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
      {/* Header */}
      <HomeSearch
        isSearchFocus={isSearchFocus}
        onSearchFocus={setSearchFocus}
      />
      {/* content */}
      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box flex={1}>
            <SearchHistoryList data={DATA} />
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <SuggestionCard
              data={homeData?.kelime[0]}
              title="Bir kelime"
              onPress={() =>
                navigation.navigate('Details', {
                  keyword: homeData?.kelime[0].madde
                })
              }
            />

            <SuggestionCard
              data={homeData?.atasoz[0]}
              title="Bir deyim - Atasözü"
              mt={30}
              onPress={() =>
                navigation.navigate('Details', {
                  keyword: homeData?.atasoz[0].madde
                })
              }
            />

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
