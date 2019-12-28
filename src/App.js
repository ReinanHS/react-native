import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './components/simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Mult'

export default class App extends Component {
  render(){
    return (
      
      <View style={Styles.container}>
        <Text style={Styles.f48}>App!</Text>
        <Simples mgs="Bem-vindo ao meu app" />
        <Inverter texto="Bem-vindo ao meu app" />
        <ParImpar numero="4" />
        <MegaSena />
      </View>
    
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f48: {
    fontSize: 48,
  }
})
