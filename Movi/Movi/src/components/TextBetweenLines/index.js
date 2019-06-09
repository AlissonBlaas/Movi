import React from 'react';
import { View } from 'react-native';
import { GFText } from '../GFText';
import styles from './styles';

export class TextBetweenLines extends React.Component {
  render() {
    const { textColor, textSize, lineColor, lineWidth, lineStrokeWidth, children, style } = this.props;
    const { stl_container_view, stl_text } = styles;

    return (
      <View style={{ ...stl_container_view, ...style }}>
        <View style={{ borderTopWidth: lineStrokeWidth, borderColor: lineColor, width: lineWidth }}/>
        <GFText style={{ ...stl_text, color: textColor, fontSize: textSize }}>
          {children}
        </GFText>
        <View style={{ borderTopWidth: lineStrokeWidth, borderColor: lineColor, width: lineWidth }}/>
      </View>
    );
  }
}