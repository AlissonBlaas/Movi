import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import  LinearGradient  from 'react-native-linear-gradient';
import styles from './styles';

export default class GFButton extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  _getButtonColor(color) {
    if (!color) {
      return ['#000', '#000'];
    }
    if (typeof color === 'string') {
      return [color, color];
    }

    return color;
  }

  render() {
    const { title, color, selectedColor, onPress, style } = this.props;
    const { active } = this.state;
    const {
      stl_container_touchable,
      stl_background_gradient,
      stl_button_text
    } = styles;

    return (
      <TouchableHighlight
        style={{...style, ...stl_container_touchable}}
        activeOpacity={1}
        onPress={onPress}
        onPressIn={() => this.setState({ active: true })}
        onPressOut={() => this.setState({ active: false })}
      >
        <LinearGradient
          colors={this._getButtonColor(active ? selectedColor : color)}
          style={stl_background_gradient}>
          <Text style={stl_button_text}>{ title }</Text>
        </LinearGradient>
      </TouchableHighlight>
    );
  }
}