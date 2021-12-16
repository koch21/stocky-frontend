import React from "react";
import { Container } from "./styles";

import StockCard from "../../components/StockCard";
import Header from "../../components/Header";

const Stocks = () => {
  return (
    <Container>
      <Header PageName="Stocks" />
      <StockCard />
    </Container>
  );
};

export default Stocks;
