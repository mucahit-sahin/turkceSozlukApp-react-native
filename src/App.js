import * as React from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HistoryView from './views/HistoryView';
import FavoriteView from './views/FavoriteView';
import DetailView from './views/DetailView';
import SearchScreen from './views/SearchScreen';

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
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="History" component={HistoryView} />
        <Tab.Screen name="Search" component={SearchView} />
        <Tab.Screen name="Favorite" component={FavoriteView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
