import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class CalcButton extends Component {
  static defaultProps = {
    onPress: function () {},
    title: "",
    color: "white",
    backgroundColor: "black",
    style: {},
  };
  render() {
    let bc = this.props.backgroundColor;
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          styles.container,
          { backgroundColor: bc },
          { ...this.props.style },
        ]}
      >
        <Text style={[styles.text, { color: this.props.color }]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  text: { fontSize: 30, fontWeight: "bold" },
});
