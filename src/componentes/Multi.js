import React, { useState, useEffect } from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import Padrao from '../estilo/Padrao'

const Inverter = props => {
    const inv = props.texto.split('').reverse().join('')
    return <Text style={Padrao.ex}>{inv}</Text>
}

const MegaSena = props => {
    const [min, max] = [1, 90]
    const [numerosGerados, setNumerosGerados] = useState(Array(props.numeros || 6).fill(0))

    const updateNumerosGerados = (odernado = false) => {

        console.log(odernado)

        const numeros = Array( numerosGerados.length ).fill(0)

        for (let i = 0; i < numeros.length; i++) {
            let novo = 0
            while (numeros.includes(novo)) {
                novo = Math.floor(Math.random() * (max - min + 1)) + min
            }
            numeros[i] = novo
        }

        setNumerosGerados( odernado ? numeros.sort((a, b) => a - b) : numeros)
    }

    return (
        <View style={StyleMega.container}>
            <Text style={Padrao.ex}>{numerosGerados.join(' - ')}</Text>
            <View style={{ marginTop: 10, paddingBottom: 1 }}>
                <Button title="Gerar Numero" onPress={() => updateNumerosGerados()}></Button>
                <Button color="#f194ff" title="Gerar Numero Odernado" onPress={() => updateNumerosGerados(true)}></Button>
            </View>
            
        </View>
    )
}

const StyleMega = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
})

export default Inverter
export { Inverter, MegaSena }