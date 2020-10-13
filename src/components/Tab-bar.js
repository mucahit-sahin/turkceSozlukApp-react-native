import {View, Text} from 'react-native';
import React from 'react';
import Button from './Button';
import {Bookmark, RotateCcw, Search} from './icons';
import Box from './Box';

function TabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === 'Search' ? (
          <Box p={15} mt={-15} bg="white" borderRadius="full">
            <Button
              key={label}
              size={56}
              borderRadius="full"
              bg="red"
              onPress={onPress}>
              <Search stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            pt={6}
            flexDirection="column"
            flex={1}
            height={56}
            onPress={onPress}>
            {label === 'Favorite' && <Bookmark />}
            {label === 'History' && <RotateCcw />}
            <Box size={3} bg={isFocused ? 'red' : 'white'} mt={6} />
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
