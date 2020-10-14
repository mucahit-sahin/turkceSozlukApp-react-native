import React from 'react'
import { Button, View } from 'react-native'
import BoxCenter from '../components/Box-center'
import Logo from '../components/icons/TdkLogo'

function SearchScreen({ navigation }) {
  return (
    <BoxCenter>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Logo color="softRed" />
    </BoxCenter>
  )
}

export default SearchScreen
