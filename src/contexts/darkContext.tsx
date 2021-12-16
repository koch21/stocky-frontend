import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

export const isDarkContext = createContext({});

export const darkContext = (props: any) => {
  // Dark Mode
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    setIsDark(colorScheme === "dark" ? true : false);
  }, [colorScheme]);

  return (
    <isDarkContext.Provider value={{ isDark }}>
      {props.children}
    </isDarkContext.Provider>
  );
};

export const useDark = () => useContext(isDarkContext);
