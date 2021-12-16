import styled from 'styled-components/native'
import {StyleSheet} from 'react-native'

export const Container = styled.View`
    background-color: ${props => props.theme.colors.secundary};
    align-items: center;
    flex: 1;
`;
export const Header = styled.SafeAreaView`
    background-color: ${props => props.theme.colors.secundary};
    position: absolute;
    align-items: center;
    justify-Content: center;
    flex: 1;
    width: 100%;
    height: 12%;
`;
export const CreateTxt = styled.Text`
    color: ${props => props.theme.colors.primary};
    font-Weight: bold;
    font-Size: 25px
`;
export const Image = styled.Image`
    margin-left: 13.5%;
    width: 70%;
    height: 22%;
    top: 20%;
`;
export const Bottom = styled.View`
    align-Items: center;
    width: 375px;
    height: 682px;
    top: 24%;
    padding-top: 20px;
`;
export const InputView = styled.View`
    background-Color: ${props => props.theme.colors.secundary};
    width: 90%;
    height: 6%;
    padding: 1%;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: ${props => props.theme.colors.primary};
    margin-Bottom: 3%;
`;
export const InputTxt = styled.TextInput`
    color: ${props => props.theme.colors.primary};
    height: 50px;
`;
export const RegisterTxt = styled.Text`
    color: ${props => props.theme.colors.secundary};
    font-Weight: 600;
    font-Size: 19px;
`;
export const RegisterBtn = styled.TouchableOpacity`
    background-Color: ${props => props.theme.colors.primary};
    align-Items: center;
    justify-Content: center;
    width: 187px;
    height: 50px;
    border-Radius: 25px;
    margin-Top: 8.7%;
`;
export const Button = styled.TouchableOpacity`
`;