import React from 'react'
import { Button, View } from 'react-native'
import Search from '../components/Search'
import Logo from '../components/icons/TdkLogo'
import Box from '../components/Box'

function SearchScreen({ navigation }) {
  return (
    <Box>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Box py={20}>
        <Logo color="red" />
      </Box>
      <Box p={10}>
        <Search />
      </Box>
    </Box>
  )
}

export default SearchScreen
