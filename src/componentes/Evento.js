import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  Alert,
  ToastAndroid,
} from 'react-native';
import Padrao from '../estilo/Padrao';

export default props => {
  const [texto, setTexto] = useState('');

  const atualizarTexto = value => {
    setTexto(value);
  };

  const enviar = () => {
    if (Platform.OS === 'android') {
      ToastAndroid.show('Foi enviado', 10);
    } else {
      Alert.alert('Enviado!');
    }
  };

  return (
    <View>
      <Text style={Padrao.ex}>Digite o código: {texto}</Text>
      <TextInput
        keyboardType={'number-pad'}
        autoCompleteType={'cc-number'}
        value={texto}
        onChangeText={atualizarTexto}
        onSubmitEditing={enviar}
      />
    </View>
  );
};
