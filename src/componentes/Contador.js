import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Contador extends Component{
    
    state = {
        total: 1
    }

    maisUm = () => {
        this.setState({total: this.state.total+1})
    }

    render(){
        return (
            <View>
    <Text style={Padrao.ex}>{ this.state.total }</Text>
                <Button onPress={this.maisUm} title="Click Aqui"></Button>
            </View>
        )
    }
}