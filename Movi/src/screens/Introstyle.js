    
import {StyleSheet} from 'react-native'
import Colors from '../constants/Colors'
import Font from '../constants/Font'

export const file_logo = require('../assets/img/logo.png');
export const background = require('../assets/img/startPage/Background.png')




const styles = StyleSheet.create({

   container:{
    width:'100%',
    height:'100%',
   },

   top:{
       flex:1,
       alignItems:'center',
       marginTop:15
   },

   btn_container:{
       marginBottom: 30,
       alignItems:'center'
    
   },
})

export default styles;