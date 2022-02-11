import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class CalcDisplay extends Component {
  static defaultProps = {
    display: "",
  };
  render() {
    return (
      <View style={this.container}>
        <Text style={styles.display}>{this.props.display}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  display: { fontSize: 70, color: "white", textAlign: "right" },
});
