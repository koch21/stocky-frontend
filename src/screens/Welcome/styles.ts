import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: ${props => props.theme.colors.secundary};
    align-items: center;
    flex: 1;
`;
export const Image = styled.Image`
    margin-right: 3%;
    width: 66%;
    height: 22%;
    top: 22.6%;
`;
export const SignupTxt = styled.Text`
    color: ${props => props.theme.colors.secundary};
    font-Weight: 600;
    font-Size: 19px;
`;
export const SignupBtn = styled.TouchableOpacity`
    background-Color: ${props => props.theme.colors.primary};
    align-Items: center;
    justify-Content: center;
    width: 55%;
    height: 6.8%;
    border-Radius: 25px;
    margin-Top: 109%;
    margin-Bottom: 6%;
`;
export const LoginTxt = styled.Text`
    color: ${props => props.theme.colors.primary};
`;
export const Button = styled.TouchableOpacity`
`;