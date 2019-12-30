import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { MegaSena, Inverter } from './componentes/Multi'
import Contador from './componentes/Contador'

const Navs = createDrawerNavigator({
    Contador: {
        screen: () => (
            <Contador></Contador>
        ),
        navigationOptions: { title: 'Contador' }
    },
    MegaSena: {
        screen: () => (
            <MegaSena></MegaSena>
        ),
    },
    Imverte: {
        screen: () => (
            <Inverter texto="Olá Mundo"></Inverter>
        ),
        navigationOptions: {
            title: 'Inverter'
        }
    },
    ParImpar: {
        screen: () => (
            <ParImpar numero="1"></ParImpar>
        ),
        navigationOptions: {
            title: 'Par ou Impar'
        }
    },
    Simples: {
        screen: () => (
            <Simples texto="Bora"></Simples>
        ),
        navigationOptions: {
            title: 'Tela Simples'
        }
    }
})

export default createAppContainer(Navs)