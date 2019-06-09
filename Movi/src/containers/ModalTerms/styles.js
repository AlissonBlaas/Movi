import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'


export default StyleSheet.create({

  modal_container: {
   flex:1,
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:Colors.CRL_WHITE
   },

  text_container:{
    flex:1,
    padding: 15,
},
  header:{
    fontFamily: Font.fontFamily,
    color: Colors.CLR_FINAL_TXT,
    fontWeight: 'bold',
    fontSize: Font.big,
    alignSelf: 'center',

  },
  sub_text:{
    fontFamily: Font.fontFamily,
    color: Colors.CLR_TERMS,
    fontSize: Font.tinebig,
    textAlign: 'center',

  },
  baixo:{
    alignItems: 'center',
    justifyContent:'space-between',
    paddingBottom:15
  },

});