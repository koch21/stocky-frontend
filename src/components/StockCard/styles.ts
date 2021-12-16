import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
`;
export const StockInf = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 16px;
`;
export const MenuButton = styled.TouchableOpacity`
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
  font-weight: bold;
`;
export const AddButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.grey};
  justify-content: center;
  align-items: center;

  margin: 24px 0px;
  width: 44px;
  height: 44px;
  border-radius: 8px;

  font-weight: bold;
  font-size: 20px;
`;
export const InputView = styled.View`
  align-items: center;
`;
export const InputView1 = styled.View`
  background-color: ${(props) => props.theme.colors.grey};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  margin: 8px 16px;
  padding: 0 16px;
  border-radius: 8px;
`;
export const InputTxt = styled.TextInput`
  background-color: ${(props) => props.theme.colors.grey};
  color: ${(props) => props.theme.colors.primary};

  border-radius: 8px;
  width: 90%;
  font-size: 18px;
  font-weight: bold;
`;
export const Bold = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: 18px;
  font-weight: bold;
  margin-right: 8px;
`;
