import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.View`
    background-color: ${props => props.theme.colors.secundary};
    align-items: center;
    flex: 1;
`;
export const Header = styled.SafeAreaView`
    position: absolute;
    align-items: center;
    justify-Content: center;
    flex: 1;
    width: 100%;
    height: 16%;
`;
export const InfoTxt = styled.Text`
    color: ${props => props.theme.colors.primary};
    width: 83%;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-Size: 13px;
`;
export const Image = styled.Image`
    margin-left: 13.5%;
    width: 69%;
    height: 22%;
    top: 20%;
`;
export const ForgotTxt = styled.Text`
    color: ${props => props.theme.colors.primary};
    font-Weight: bold;
    font-Size: 25px;
    padding-bottom: 4%;
`;
export const Bottom = styled.View`
    align-Items: center;
    width: 375px;
    height: 682px;
    top: 14.8%;
    padding-top: 140px;
`;
export const InputView = styled.View`
    background-Color: ${props => props.theme.colors.secundary};
    width: 90%;
    height: 8%;
    padding: 1%;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: ${props => props.theme.colors.primary};
    margin-Bottom: 3%;
`;
export const InputTxt = styled.TextInput`
    color: ${props => props.theme.colors.primary};
    height: 50px;
`;
export const ResetTxt = styled.Text`
    color: ${props => props.theme.colors.secundary};
    font-Weight: 600;
    font-Size: 19px;
`;
export const Resetbtn = styled.TouchableOpacity`
    background-Color: ${props => props.theme.colors.primary};
    align-Items: center;
    justify-Content: center;
    width: 187px;
    height: 50px;
    border-Radius: 25px;
    margin-Top: 24.2%;
`;
export const LoginTxt = styled.Text`
    color: ${props => props.theme.colors.primary};
`;
export const Button = styled.TouchableOpacity`
`;