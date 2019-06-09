    
import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

export class GFText extends React.Component {
  render() {
    const { children, style } = this.props;
    const { stl_text } = styles;

    return (
      <Text style={{...stl_text, ...style}}>
        { children }
      </Text>
    );
  }
}