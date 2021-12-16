import React, { useEffect, useState } from "react";
import {
  Container,
  StockInf,
  MenuButton,
  AddButton,
  InputView,
  InputView1,
  InputTxt,
} from "./styles";
import { useColorScheme } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

import CardChart from "../CardChart";

const StockCard = () => {
  // Maping Stock Symbols
  const [cardSymbol, setCardSymbol] = useState([
    "aapl",
    "amzn",
    "nflx",
    "pypl",
    "sbux",
  ]);
  const [textInput, setTextInput] = useState("");
  const submitHandler = () => {
    setTextInput("");
  };
  const changeHandler = (value: string) => {
    setTextInput(value);
  };

  // Display StockCards
  const MapCard = () => {
    return cardSymbol?.map((Symbol) => (
      <CardChart StockSymbol={Symbol} key={Symbol} />
    ));
  };

  // Simple Press Check
  const [isPress, setIsPress] = useState(true);
  return (
    <Container>
      {MapCard()}
      <InputView1 style={isPress === true ? { height: 0 } : { height: 57 }}>
        <InputTxt
          onSubmitEditing={submitHandler}
          onChangeText={changeHandler}
          value={textInput}
        />
        <MenuButton
          onPress={() => {
            setCardSymbol(cardSymbol.concat(textInput)),
              setTextInput(""),
              setIsPress(true);
          }}
        >
          <Feather
            name="arrow-right"
            size={24}
            color={
              useColorScheme() === "dark"
                ? isPress
                  ? "#121212"
                  : "#f2f2f2"
                : isPress
                ? "#f2f2f2"
                : "#121212"
            }
          />
        </MenuButton>
      </InputView1>
      <InputView>
        <AddButton
          onPress={() => {
            isPress === true ? setIsPress(false) : setIsPress(true);
          }}
        >
          <AntDesign
            name={isPress === true ? "plus" : "close"}
            size={24}
            color={useColorScheme() === "dark" ? "#f2f2f2" : "#121212"}
          />
        </AddButton>
      </InputView>
    </Container>
  );
};

export default StockCard;
