import React from "react";
import { View, TextInput } from "react-native";
import { GFText } from "../GFText";
import styles from "./styles";

export class GFTextInput extends React.Component {
  constructor() {
    super();
    this.state = {
      focused: false
    };
  }

  render() {
    const {
      stl_container_view,
      stl_label_text
    } = styles;
    const {
      label,
      labelColor,
      icon,
      style,
      placeholder,
      borderColor,
      focusColor,
      secureTextEntry
    } = this.props;

    return (
      <View style={style}>
        { label ?
          <GFText style={{...stl_label_text, color: this.state.focused ? focusColor: labelColor}}>
            { label }
          </GFText> :
          null
        }

        <View
          style={{...stl_container_view, borderColor: this.state.focused ? focusColor : borderColor}}
        >
          <TextInput style={{ flex: 1 }}
            placeholder={placeholder}
            onFocus={() => this.setState({ focused: true })}
            onBlur={() => this.setState({ focused: false })}
            secureTextEntry={secureTextEntry}
            selectionColor={focusColor}
          />
        </View>
      </View>
    );
  }
}