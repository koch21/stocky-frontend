import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-top: 8px;
`;
export const ChartCard = styled.TouchableOpacity`
  margin: 0 16px;
  background-color: ${(props) => props.theme.colors.grey};
  border-radius: 8px;
`;
export const Percent = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ChartHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px 16px;
  justify-content: space-between;
`;
export const Symbol = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: 18px;
  font-weight: bold;
`;
export const Value = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: 18px;
  font-weight: bold;
`;
export const LastPrice = styled.Text`
  color: ${(props) => props.theme.colors.blue};
  font-weight: bold;
  font-size: 16px;
`;
