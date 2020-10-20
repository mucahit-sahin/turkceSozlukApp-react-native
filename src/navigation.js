import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import HistoryView from './views/HistoryView'
import FavoriteView from './views/FavoriteView'
import DetailView from './views/DetailView'
import SearchScreen from './views/SearchScreen'
import TabBar from './components/Tab-bar'
import theme from './utils/theme'
import { Left, More } from './components/icons'
import Button from './components/Button'

const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator()

function SearchView() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={SearchScreen}
        options={() => {
          return {
            headerShown: false
          }
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailView}
        options={({ route, navigation }) => {
          return {
            title: route.params?.title,
            headerStyle: {
              backgroundColor: theme.colors.softRed,
              shadowColor: 'transparent'
            },
            headerLeft: () => (
              <Button
                height="100%"
                px={20}
                onPress={() => navigation.navigate('Home')}
              >
                <Left color={theme.colors.textDark} />
              </Button>
            ),
            headerRight: () => (
              <Button
                height="100%"
                px={20}
                onPress={() => navigation.navigate('Home')}
              >
                <More color={theme.colors.textDark} />
              </Button>
            )
          }
        }}
      />
    </HomeStack.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen name="History" component={HistoryView} />
        <Tab.Screen name="Search" component={SearchView} />
        <Tab.Screen name="Favorite" component={FavoriteView} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
