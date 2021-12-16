import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.secundary};
`;
export const Header = styled.View`
  background-color: ${props => props.theme.colors.secundary};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 0 14px;
  padding-top: 10px;
`;
export const MenuButton = styled.TouchableOpacity`
  color: ${props => props.theme.colors.primary};
  font-size: 22px;
  font-weight: bold;
  margin-left: 14px;
`;
export const Bold = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${props => props.theme.colors.primary};
`;
export const Balance = styled.Text`
  color: ${props => props.theme.colors.primary};
`;
export const Ico = styled.Image`
  transform: scale(0.8, 0.8);
`;
