import React from 'react'
import { Text } from 'react-native'
import StyleMain from '../styles/StyleMain'

export default (props) => {
    return (
        <Text style={[StyleMain.ex]}>{ props.mgs }</Text>
    )
}