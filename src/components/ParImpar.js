import React from 'react'
import { View, Text, TextInput } from 'react-native'
import StyleMain from '../styles/StyleMain'

export default (props) => {
    return (
        <View>
            { props.numero % 2 == 0 ? <Text style={[StyleMain.ex]}>O número é Par</Text> : <Text style={[StyleMain.ex]}>O número é Impar</Text>  }
        </View>
    )
}