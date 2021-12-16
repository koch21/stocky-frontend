import React, { useState } from "react";
import { Container, MenuButton, Bold } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useDark } from "../../contexts/darkContext";

interface HeaderProps {
  PageName: string;
  MenuFunction?: () => void;
}

const Header: React.FC<HeaderProps> = ({ PageName, MenuFunction }) => {
  const isDark = useDark();
  const [isPress, setIsPress] = useState(true);

  return (
    <Container>
      <MenuButton
        onPress={() => {
          isPress === true ? setIsPress(false) : setIsPress(true);
        }}
      >
        <Ionicons
          name={isPress ? "menu" : "close"}
          size={24}
          color={isDark ? "#f2f2f2" : "#121212"}
        />
        {MenuFunction}
      </MenuButton>
      <Bold>{PageName}</Bold>
    </Container>
  );
};

export default Header;
