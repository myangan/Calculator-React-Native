import { View, Text, SafeAreaView, Button } from "react-native";
import Style from "./src/Style.js";
import { useState } from "react";
import { buildDisplayText, renderInputButtons } from "./src/functions/display";


export default function App() {
  const [num, setNum] = useState(0);
  const [arithmetic, setArithmetic] = useState("");
  const [arg, setArg] = useState([]);
  const [mode, setMode] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {mode ? (
        <View style={Style.rootContainer}>
          <View style={Style.inputContainer}></View>
          <View style={Style.displayContainer}>
            <Button
              onPress={() => {
                setMode(false);
              }}
              title="Close"
              color="#fff"
              accessibilityLabel="closing button"
            />
          </View>
        </View>
      ) : (
        <View style={Style.rootContainer}>
          <View style={Style.displayContainer}>
            <Text adjustsFontSizeToFit style={Style.displayText}>
              {buildDisplayText(arg)}
            </Text>
          </View>
          <View style={Style.displayContainer}>
            <Text style={Style.displayText}>{num}</Text>
          </View>
          <View style={Style.inputContainer}>
            {renderInputButtons(
              num,
              setNum,
              arithmetic,
              setArithmetic,
              arg,
              setArg,
              mode,
              setMode
            )}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
