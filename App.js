import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Facebook from  './screens/fb'
import Instagram from './screens/in'

import {createAppContainer} from 'react-navigation'
import{createBottomTabNavigator} from 'react-navigation-tabs'


export default class App extends React.Component{
  render(){
    return(
     <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Instagram:{screen:Instagram}
})

var AppContainer  =createAppContainer(TabNavigator)

