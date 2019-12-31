import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import {MegaSena, Inverter} from './componentes/Multi';
import Contador from './componentes/Contador';
import Validator from './componentes/Validator';

const Navs = createDrawerNavigator({
  Validator: {
    screen: () => <Validator ano={2019} />,
  },
  Contador: {
    screen: () => <Contador />,
    navigationOptions: {title: 'Contador'},
  },
  MegaSena: {
    screen: () => <MegaSena />,
  },
  Imverte: {
    screen: () => <Inverter texto="Olá Mundo" />,
    navigationOptions: {
      title: 'Inverter',
    },
  },
  ParImpar: {
    screen: () => <ParImpar numero="1" />,
    navigationOptions: {
      title: 'Par ou Impar',
    },
  },
  Simples: {
    screen: () => <Simples texto="Bora" />,
    navigationOptions: {
      title: 'Tela Simples',
    },
  },
});

export default createAppContainer(Navs);
