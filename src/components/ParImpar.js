import React from 'react'
import { View, Text, TextInput } from 'react-native'
import StyleMain from '../styles/StyleMain'

function ParOrImpar(numero){
    const result = numero % 0 == 0 ? 'Par' : 'Impar'
    return <Text style={[StyleMain.ex]}>O número { numero } é {result}</Text>
}

export default (props) => {
    return (
        <View>
            { ParOrImpar(props.numero) }
        </View>
    )
}