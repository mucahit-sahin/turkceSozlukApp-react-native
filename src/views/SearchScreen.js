import React from 'react';
import {Button, View} from 'react-native';
import BoxCenter from '../components/Box-center';

function SearchScreen({navigation}) {
  return (
    <BoxCenter>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </BoxCenter>
  );
}

export default SearchScreen;
