import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import CalculatorScreen from "./screens/CalculatorScreen.js";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <CalculatorScreen />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
});
