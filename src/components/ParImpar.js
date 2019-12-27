import React from 'react'
import { View, Text, TextInput } from 'react-native'
import StyleMain from '../styles/StyleMain'
import If from './If'

export default (props) => {
    return (
        <View>
            <If test={ props.numero % 2 == 0 }>
                <Text style={[StyleMain.ex]}>O número { props.numero } é Par</Text>
            </If>
            <If test={ props.numero % 2 == 1 }>
                <Text style={[StyleMain.ex]}>O número { props.numero } é Impar</Text>
            </If>
        </View>
    )
}