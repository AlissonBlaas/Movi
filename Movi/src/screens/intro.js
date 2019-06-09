import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import styles, {file_logo, background} from './Introstyle'
import GFButton from '../components/GFButton'
import Colors from '../constants/Colors'

const intro = ({navigation}) => (


  <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.container}
      >   
    <View style={styles.top}>
        <Image
            source={file_logo}
           
        />
    </View>

    <View style={styles.btn_container}>
        <GFButton
                 title="PROXIMO"
                 color={[Colors.CRL_BBLUE, Colors.CRL_BBLUE]}
                 selectedColor={Colors.CRL_BLACK}
                 onPress={() => navigation.navigate('CorL')}/>
    
    </View>
    </ImageBackground>
  </View>



);

intro.navigationOptions = {
  header: null
}


export default intro;