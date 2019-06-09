    
import {StyleSheet} from 'react-native'
import Colors from '../constants/Colors'
import Font from '../constants/Font'

export const file_logo = require('../assets/img/logo.png');
export const background = require('../assets/img/startPage/Background.png')




const CorLStyle = StyleSheet.create({

    sectionTitle: {
        fontFamily: Font.fontFamily,
        color: Colors.colorWhite,
        fontWeight: 'bold',
        fontSize: Font.tinebig,
        alignSelf: 'center',
        textAlign: 'center',
        padding: 20
      },

      stl_container_view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 48,
        paddingBottom: 28
      },
      stl_or_text: {
        marginVertical: 10
      },
      stl_options_view: {
        alignItems: 'center'
      },
      stl_login_form_container: {
        marginBottom: 14
      },
      stl_signup_btn: {
        marginBottom: 20
      },
      bot_container:{
        paddingTop: 30,
      },
      txt_stl:{
        alignItems:'center',
          paddingLeft: 5
      },
      stl_bt_txt:{
        fontFamily: Font.fontFamily,
        color: Colors.colorWhite,
        fontWeight: 'bold',
        fontSize: Font.regular,
      }
})

export default CorLStyle;