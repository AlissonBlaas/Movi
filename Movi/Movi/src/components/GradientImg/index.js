import React from 'react';
import { ImageBackground } from 'react-native';
import LinearGradient  from 'react-native-linear-gradient';
import styles from './styles';

export class GradientImg extends React.Component {
  render() {
    const { source, style, colors, children } = this.props;
    const { stl_background_gradient } = styles;

    return (
      <ImageBackground
        source={source}
        style={style}
      >
        <LinearGradient
          colors={[colors, colors]}
          style={stl_background_gradient}>
        </LinearGradient>
        { children }
      </ImageBackground>
    );
  }
}   