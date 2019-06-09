import React from 'react';
import { View,  
  Image,
  Text,
  ImageBackground
 } from 'react-native';
import CorLStyle, {file_Background, file_logo} from './CorLStyle';
import {ClienteCadastro} from '../containers/ClienteCadastro'



const Cadastro = ({ navigation }) => (
  

  <ImageBackground
        source={file_Background}
        style={CorLStyle.stl_container_view}      
      >
        <Image style={CorLStyle.stl_logo_img} source={file_logo} />
        <Text style={CorLStyle.sectionTitle}>Bem Vindo!</Text>
        <View style={CorLStyle.stl_options_view}>
          <ClienteCadastro
            style={CorLStyle.stl_login_form_container}
            onPress={() => navigation.navigate('Aval1') }
          />
        </View>    
      </ImageBackground>

);

Cadastro.navigationOptions = {
  header: null,
}

export default Cadastro;