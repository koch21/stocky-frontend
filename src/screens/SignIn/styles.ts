import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  background-color: ${props => props.theme.colors.secundary};
  align-items: center;
  flex: 1;
`;
export const Header = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.secundary};
  position: absolute;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 12%;
`;
export const WelcomeTxt = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  font-size: 25px;
`;
export const Image = styled.Image`
  margin-left: 13.5%;
  width: 70%;
  height: 22%;
  top: 20%;
`;
export const Bottom = styled.View`
  align-items: center;
  width: 375px;
  height: 682px;
  top: 6%;
  padding-top: 162px;
`;
export const InputView = styled.View`
  background-color: ${props => props.theme.colors.secundary};
  width: 90%;
  height: 8%;
  padding: 1%;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${props => props.theme.colors.primary};
  margin-bottom: 3%;
`;
export const InputTxt = styled.TextInput`
  color: ${props => props.theme.colors.primary};
  height: 50px;
`;
export const ForgotTxt = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
  margin-left: 51%;
  margin-bottom: 20%;
`;
export const LoginTxt = styled.Text`
  color: ${props => props.theme.colors.secundary};
  font-weight: 600;
  font-size: 19px;
`;
export const LoginBtn = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  width: 187px;
  height: 50px;
  border-radius: 25px;
  margin-bottom: 6%;
`;
export const SignupTxt = styled.Text`
  color: ${props => props.theme.colors.primary};
`;
export const Button = styled.TouchableOpacity``;
