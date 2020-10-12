import React from 'react';
import {Button, View} from 'react-native';
import Box from '../components/Box';
import BoxCenter from '../components/Box-center';
function SearchScreen({navigation}) {
  return (
    <BoxCenter>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Box size={20} bg="blue" />
    </BoxCenter>
  );
}

export default SearchScreen;
