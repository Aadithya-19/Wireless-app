import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TransactionScreen from './screens/BookTransaction';
import SearchScreen from './screens/SearchScreen';

import {createAppContainer} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tab';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>    
      
      );
  }
}

const TabNavigator = createBottomTabNavigator({
  TransactionScreen:{screen : TransactionScreen},
  Search: {screen: SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator);