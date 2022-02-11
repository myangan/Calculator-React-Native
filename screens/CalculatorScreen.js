require("../lib/swisscalc.lib.format.js");
require("../lib/swisscalc.lib.operator.js");
require("../lib/swisscalc.lib.operatorCache.js");
require("../lib/swisscalc.lib.shuntingYard.js");
require("../lib/swisscalc.calc.calculator.js");
require("../lib/swisscalc.display.memoryDisplay");
require("../lib/swisscalc.display.numericDisplay");

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { CalcButton, CalcDisplay } from "./../components";

export default class CalculatorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
    };
    this.oc = swisscalc.lib.operatorCache;
    this.calc = new swisscalc.calc.calculator();
  }
  onDigitPress = (digit) => {
    this.calc.addDigit(digit);
    this.setState({ display: this.calc.getMainDisplay() });
  };
  onPressClear = () => {
    this.calc.clear();
    this.setState({ display: this.calc.getMainDisplay() });
  };
  onPlusMinus = () => {
    this.calc.negate();
    this.setState({ display: this.calc.getMainDisplay() });
  };
  onBinaryOperatorPress = (operator) => {
    this.calc.addBinaryOperator(operator);
    this.setState({ display: this.calc.getMainDisplay() });
  };
  onEqualPress = () => {
    this.calc.equalsPressed();
    this.setState({ display: this.calc.getMainDisplay() });
  };
  onUnaryOperatorPressed = (operator) => {
    this.calc.addUnaryOperator(operator);
    this.setState({ display: this.calc.getMainDisplay() });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.displayContainer}>
          <CalcDisplay display={this.state.display} />
        </View>

        <View>
          <View style={styles.buttonRow}>
            <CalcButton
              title="3D mode"
              color="white"
              backgroundColor="#DCC894"
              style={{ flex: 2 }}
            />
            <CalcButton
              title="models"
              color="white"
              backgroundColor="#DCC894"
              style={{ flex: 2 }}
            />
          </View>
          <View style={styles.buttonRow}>
            <CalcButton
              title="c"
              onPress={this.onPressClear}
              color="white"
              backgroundColor="#DCC894"
            />
            <CalcButton
              title="±"
              onPress={this.onPlusMinus}
              color="white"
              backgroundColor="#DCC894"
            />
            <CalcButton
              title="%"
              onPress={() => {
                this.onUnaryOperatorPressed(this.oc.PercentOperator);
              }}
              color="white"
              backgroundColor="#DCC894"
            />
            <CalcButton
              title="/"
              onPress={() => {
                this.onBinaryOperatorPress(this.oc.DivisionOperator);
              }}
              color="white"
              backgroundColor="#DCA394"
            />
          </View>
          <View style={styles.buttonRow}>
            <CalcButton
              title="7"
              onPress={() => {
                this.onDigitPress("7");
              }}
              color="white"
              backgroundColor="#607D88"
            />
            <CalcButton
              title="8"
              onPress={() => {
                this.onDigitPress("8");
              }}
              color="white"
              backgroundColor="#607D88"
            />
            <CalcButton
              title="9"
              onPress={() => {
                this.onDigitPress("9");
              }}
              color="white"
              backgroundColor="#607D88"
            />
            <CalcButton
              title="x"
              onPress={() => {
                this.onBinaryOperatorPress(this.oc.MultiplicationOperator);
              }}
              color="white"
              backgroundColor="#DCA394"
            />
          </View>
          <View style={styles.buttonRow}>
            <CalcButton
              title="4"
              onPress={() => {
                this.onDigitPress("4");
              }}
              color="white"
              backgroundColor="#607D88"
            />
            <CalcButton
              title="5"
              onPress={() => {
                this.onDigitPress("5");
              }}
              color="white"
              backgroundColor="#607D88"
            />
            <CalcButton
              title="6"
              onPress={() => {
                this.onDigitPress("6");
              }}
              color="white"
              backgroundColor="#607D88"
            />
            <CalcButton
              title="-"
              onPress={() => {
                this.onBinaryOperatorPress(this.oc.SubtractionOperator);
              }}
              color="white"
              backgroundColor="#DCA394"
            />
          </View>
          <View style={styles.buttonRow}>
            <CalcButton
              title="1"
              onPress={() => {
                this.onDigitPress("1");
              }}
              color="white"
              backgroundColor="#607D88"
            />
            <CalcButton
              title="2"
              onPress={() => {
                this.onDigitPress("2");
              }}
              color="white"
              backgroundColor="#607D88"
            />
            <CalcButton
              title="3"
              onPress={() => {
                this.onDigitPress("3");
              }}
              color="white"
              backgroundColor="#607D88"
            />
            <CalcButton
              title="+"
              onPress={() => {
                this.onBinaryOperatorPress(this.oc.AdditionOperator);
              }}
              color="white"
              backgroundColor="#DCA394"
            />
          </View>
          <View style={styles.buttonRow}>
            <CalcButton
              title="0"
              onPress={() => {
                this.onDigitPress("0");
              }}
              color="white"
              backgroundColor="#607D88"
              style={{ flex: 2 }}
            />
            <CalcButton
              title="."
              onPress={() => {
                this.onDigitPress(".");
              }}
              color="white"
              backgroundColor="#607D88"
            />
            <CalcButton
              title="="
              onPress={this.onEqualPress}
              color="white"
              backgroundColor="#DCA394"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  displayContainer: { flex: 1, justifyContent: "flex-end" },
  buttonRow: { flexDirection: "row", justifyContent: "space-between" },
});
