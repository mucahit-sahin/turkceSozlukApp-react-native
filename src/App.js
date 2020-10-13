import * as React from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HistoryView from './views/HistoryView';
import FavoriteView from './views/FavoriteView';
import DetailView from './views/DetailView';
import SearchScreen from './views/SearchScreen';
import TabBar from './components/Tab-bar';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Box from './components/Box';
import theme from './utils/theme';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function SearchView() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={SearchScreen} />
      <HomeStack.Screen name="Details" component={DetailView} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} as={SafeAreaView}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Search"
            tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen name="History" component={HistoryView} />
            <Tab.Screen name="Search" component={SearchView} />
            <Tab.Screen name="Favorite" component={FavoriteView} />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </ThemeProvider>
  );
}
