import { View } from "react-native";
import InputButton from "../InputButtons";
import Style from "../Style";

export function buildDisplayText(arg) {
  let displayText = "";
  if (arg.length > 0) arg.forEach((x) => (displayText += x));
  return displayText;
}

export function renderInputButtons(
  num,
  setNum,
  arithmetic,
  setArithmetic,
  arg,
  setArg,
  mode,
  setMode
) {
  const inputButtons = [
    ["clear", "3D mode", "Arithmetic"],
    [7, 8, 9, "/"],
    [4, 5, 6, "*"],
    [1, 2, 3, "-"],
    [0, ".", "=", "+"],
  ];

  const onInputButtonPressed = (input) => {
    if (input === "3D mode") setMode(true);
    if (input === "clear") {
      setNum(0);
      setArithmetic("");
      setArg([]);
    }
    if (input >= 0 || input===".") {
      let newNum = 0
      if(input === '.' || num - Math.floor(num) !== 0) newNum = num + input/10
      newNum = num * 10 + input;
      setNum(newNum);
    } else {
      setArithmetic(input);
      arg.push(num);
      arg.push(input);
      setNum(0);
    }
  };

  let views = [];
  for (let r = 0; r < inputButtons.length; r++) {
    let row = inputButtons[r];
    let inputRow = [];
    for (let i = 0; i < row.length; i++) {
      let input = row[i];
      inputRow.push(
        <InputButton
          value={input}
          key={r + "-" + i}
          onPress={() => onInputButtonPressed(input)}
        />
      );
    }
    views.push(
      <View style={Style.inputRow} key={"row-" + r}>
        {inputRow}
      </View>
    );
  }
  return views;
}


