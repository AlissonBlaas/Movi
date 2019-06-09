import React from 'react';
import { View, Text } from 'react-native';
import  GFButton from '../../components/GFButton';
import {GFTextInput} from '../../components/GFTextInput'
import Colors from '../../constants/Colors';
import { styles } from './styles';
import {TextButton} from '../../components/TextButton'



export class LoginCTN extends React.Component {

  render() {


    const { style, onSubmit } = this.props;

    const {
      stl_login_input,
      stl_password_input
     } = styles;

    return (
      <View style={style}>
        
        <GFTextInput
          style={stl_login_input}
          label="E-MAIL:"
          labelColor={Colors.CLR_TEXT_WHITE}
          borderColor={Colors.CLR_TEXT_GRAY}
          focusColor={Colors.CRL_BLACK}
          placeholder="email@email.com"
        />
        <GFTextInput
          style={stl_password_input}
          label="SENHA:"
          labelColor={Colors.CLR_TEXT_WHITE}
          borderColor={Colors.CLR_TEXT_GRAY}
          focusColor={Colors.CRL_BLACK }
          secureTextEntry={true}
        />
      <View style={styles.txt_container}>
        <TextButton
        title='Esqueci a senha'
        OnPress=''
        color={Colors.colorWhite}
        />
      </View>
        <GFButton
          title="LOGAR"
          color={[Colors.CRL_GREEN, Colors.CRL_GREEN]}
          selectedColor={Colors.CLR_TEXT_GRAY}
          onPress={() => navigation.navigate('maps') }
        />
        
      </View>
    );
  }
}