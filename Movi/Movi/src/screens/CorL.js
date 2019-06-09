import React from 'react';
import { View,  
  Image,
  Text,
  ImageBackground
 } from 'react-native';
import CorLStyle, {file_Background, file_logo} from './CorLStyle';
import GFButton from '../components/GFButton/index';
import {TextButton} from '../components/TextButton'
import Colors from '../constants/Colors'
import {TextBetweenLines} from '../components/TextBetweenLines'



const CorL = ({ navigation }) => (
  

  <ImageBackground
        source={file_Background}
        style={CorLStyle.stl_container_view}
      >
        <Image style={CorLStyle.stl_logo_img} source={file_logo} />
        <View style={CorLStyle.stl_options_view}>
        <Text style={CorLStyle.sectionTitle}>ESCOLHA SEU TIPO DE CONTA:</Text>
        <GFButton
          title="ENTRAR"
          color={[Colors.CRL_BBLUE, Colors.CRL_BBLUE]}
          selectedColor={Colors.CRL_BLACK}
          onPress={() => navigation.navigate('Login') }
        />
          <TextBetweenLines
            style={CorLStyle.stl_or_text}
            textColor={Colors.CLR_TEXT_WHITE}
            textSize={17}
            lineColor={Colors.CLR_TEXT_WHITE_TRANSPARENT}
            lineWidth={45}
            lineStrokeWidth={1.5}
          >
            OU
          </TextBetweenLines>

          <GFButton
          title="CADASTRAR"
          color={[Colors.CRL_GREEN, Colors.CRL_GREEN]}
          selectedColor={Colors.CRL_BLACK}
          onPress={() => navigation.navigate('Cadastro') }
        />
        </View>
      
      <View style={CorLStyle.bot_container}>
      <Text style={CorLStyle.stl_bt_txt}>Já tem conta?</Text>
          <View style={CorLStyle.txt_stl}>
            <TextButton
                title="Termos e Serviço"
                onPress={() => navigation.navigate('Login') }
                color={Colors.CRL_GREEN}
                selectedColor={Colors.CRL_GREEN}>Novo aqui?</TextButton>
          </View>
      </View>
      </ImageBackground>

);

CorL.navigationOptions = {
  header: null,
}

export default CorL;