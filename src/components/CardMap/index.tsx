import React from "react";
import {
  Container,
  ChartCard,
  Symbol,
  Value,
  Percent,
  ChartHeader,
  LastPrice,
} from "./styles";

import { LineChart } from "react-native-svg-charts";
import { Ionicons } from "@expo/vector-icons";

interface CardProps {
  StockSymbol: string;
  spaceLeft: number;
  dataValue: number;
  ArrowColor: string;
  ArrowName: any;
  PercentPrice: number;
  PercentPriceColor: string;
  Xvalue: any;
}

const CardMap: React.FC<CardProps> = ({
  StockSymbol,
  spaceLeft,
  dataValue,
  ArrowColor,
  ArrowName,
  PercentPrice,
  PercentPriceColor,
  Xvalue,
}) => {
  const [isPress, setIsPress] = React.useState(true);

  return (
    <Container>
      <ChartCard
        onPress={() => setIsPress(isPress === true ? false : true)}
        style={{ height: isPress ? 57 : 240 }}
      >
        <ChartHeader>
          <Symbol>{StockSymbol.toUpperCase()}</Symbol>
          <Value style={{ marginLeft: spaceLeft }}>{dataValue}$</Value>
          <Percent>
            <LastPrice
              style={{
                color: PercentPriceColor,
              }}
            >
              <Ionicons color={ArrowColor} name={ArrowName} size={18} />
              {PercentPrice}%
            </LastPrice>
          </Percent>
        </ChartHeader>
        <LineChart
          style={{ flex: 1 }}
          data={Xvalue}
          svg={{ stroke: "rgba(53, 140, 176)", strokeWidth: 2 }}
          contentInset={{ top: 16, bottom: 16 }}
        />
      </ChartCard>
    </Container>
  );
};

export default CardMap;
