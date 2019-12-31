import React from 'react';
import PropType from 'prop-types';
import {View, Text} from 'react-native';
import Padrao from '../estilo/Padrao';

const Validator = props => {
  return (
    <View>
      <Text style={Padrao.ex}>
        {props.texto} - {props.ano}
      </Text>
    </View>
  );
};

Validator.defaultProps = {texto: 'Feliz ano novo!'};

Validator.propsType = {
  texto: PropType.string,
  ano: PropType.number.isRequired,
};

export default Validator;
