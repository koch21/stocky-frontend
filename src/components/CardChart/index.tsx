import React, { useEffect, useState } from "react";
import { useDark } from "../../contexts/darkContext";

import CardMap from "../CardMap";

const CardChart = ({ StockSymbol }: { StockSymbol: string }) => {
  const isDark = useDark();

  // receive API
  function ReceiveApi(StockSymbol: string) {
    return fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=full&apikey=JMGY3S1GJPIGF2G3`
    );
  }

  //Data X and Y API Values
  const [datay, setDataY] = useState([]);
  const [datax, setDataX] = useState([]);

  // @ts-ignore
  let setDataYfunction = [];
  // @ts-ignore
  let setDataXfunction = [];

  // Stock Api Call
  const [timeSize, setTimeSize] = useState(16);
  React.useEffect(() => {
    ReceiveApi(StockSymbol)
      .then((res) => res.json())
      .then((data) => {
        for (var key in data["Time Series (Daily)"]) {
          setDataYfunction.push(key);
          setDataXfunction.push(data["Time Series (Daily)"][key]["4. close"]);
        }
        // @ts-ignore
        setDataY(setDataYfunction.slice(0, timeSize).map(Number).reverse());
        // @ts-ignore
        setDataX(setDataXfunction.slice(0, timeSize).map(Number).reverse());
      });
  }, [timeSize]);

  // Calculate if Stock is on the rise
  const [isUp, setIsUp] = React.useState(Boolean);
  React.useEffect(() => {
    setIsUp(datax[timeSize - 1] >= datax[timeSize - 2] ? true : false);
  });

  // Percent Values
  const percentvalue =
    ((datax[timeSize - 1] - datax[timeSize - 2]) / datax[timeSize - 2]) * 100;
  const roundedvalue = parseFloat(percentvalue.toFixed(2));

  return (
    <CardMap
      StockSymbol={StockSymbol}
      spaceLeft={StockSymbol.length < 4 ? 28 : 0}
      dataValue={datax[timeSize - 1]}
      ArrowColor={
        isUp ? (isDark ? "#0084eb" : "#0392ea") : isDark ? "#CC0000" : "#ff4444"
      }
      ArrowName={isUp ? "arrow-up" : "arrow-down"}
      PercentPrice={isUp ? roundedvalue : -roundedvalue}
      PercentPriceColor={
        isUp ? (isDark ? "#0084eb" : "#0392ea") : isDark ? "#CC0000" : "#ff4444"
      }
      Xvalue={datax}
    />
  );
};

export default CardChart;
