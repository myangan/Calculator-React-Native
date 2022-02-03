import React from "react";
import { Text, TouchableHighlight } from "react-native";
import Style from "./Style";

export default function InputButton (props) {
    return (
      <TouchableHighlight
        style={Style.inputButton}
        underlayColor="#193441"
        onPress={props.onPress}
      >
        <Text style={Style.inputButtonText}>{props.value}</Text>
      </TouchableHighlight>
    );
}
