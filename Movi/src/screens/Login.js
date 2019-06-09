import React from 'react';
import { View,  
  Image,
  ImageBackground
 } from 'react-native';
import LoginStyle, {file_Background, file_logo} from './LoginStyle.js';
import {TextButton} from '../components/TextButton'
import Colors from '../constants/Colors'
import {LoginCTN} from '../containers/LoginContainer'
import {TextBetweenLines} from '../components/TextBetweenLines'



const Login = ({ navigation }) => (
  

  <ImageBackground
        source={file_Background}
        style={LoginStyle.stl_container_view}
      >
        <Image style={LoginStyle.stl_logo_img} source={file_logo} />
        <View style={LoginStyle.stl_options_view}>
          <LoginCTN
            style={LoginStyle.stl_login_form_container}
          />
          <TextBetweenLines
            style={LoginStyle.stl_or_text}
            textColor={Colors.CLR_TEXT_GRAY}
            textSize={17}
            lineColor={Colors.CLR_TEXT_GRAY}
            lineWidth={45}
            lineStrokeWidth={1.5}
          >
            OU
          </TextBetweenLines>

        </View>
        <TextButton
            title="Cadastre-se"
            onPress={() => navigation.navigate('Cadastro') }
            color={Colors.CLR_TEXT_WHITE}
            selectedColor={Colors.CRL_GREEN}>Novo aqui?</TextButton>


      </ImageBackground>

);

Login.navigationOptions = {
  header: null,
}

export default Login;
