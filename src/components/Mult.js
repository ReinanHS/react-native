import React from 'react'
import { Text } from 'react-native'
import StyleMain from '../styles/StyleMain'

// Atributos
const max = 9
const min = 1

const Inverter = (props) => {
    const texto = props.texto.split('').reverse().join('')
    return <Text style={[StyleMain.ex]}>{texto}</Text>
}

const MegaSena = (props) => {
    let numeros = Array(props.numeros || 6).fill(0)
    numeros.forEach((value, key) => {
        let numero = 0
        while(numeros.includes(numero)){
            numero = Math.floor( Math.random() * (max - min) + min )
        }

        numeros.splice(key, 1, numero)
    })
    /*
        Por padrão, a função sort() do javascript ordena de forma léxica o seu Array. 
        Porém opcionalmente você pode passar uma função no parâmetro de entrada, 
        para que ela retorne o resultado desejado.
    */
   
    //numeros.sort( (a,b) => a-b )

    return <Text style={[StyleMain.ex]}>{numeros.join(' - ')}</Text>
}

export default MegaSena
export { MegaSena, Inverter }