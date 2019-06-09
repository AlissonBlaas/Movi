import { StyleSheet } from 'react-native';
import Font from '../../constants/Font';

export default StyleSheet.create({
  stl_container_touchable: {
    height: 50,
    borderRadius: 25,
    width: 280
  },
  stl_background_gradient: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  stl_button_text: {
    marginTop: 3,
    fontFamily: Font.fontFamily,
    fontSize: Font.tinebig,
    letterSpacing: -0.1,
    color: '#fff'
  }
});