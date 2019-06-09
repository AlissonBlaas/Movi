import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styles from './styles';

export class TextButton extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  render() {
    const { title, onPress, color, selectedColor, style } = this.props;
    const { active } = this.state;
    const { stl_button_text } = styles;

    return (
      <TouchableHighlight
        underlayColor="rgba(0, 0, 0, 0)"
        activeOpacity={1}
        onPress={onPress}
      >
        <Text style={{...stl_button_text, ...style, color: active ? selectedColor : color }}>{ title }</Text>
      </TouchableHighlight>
    );
  }
}