import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${props => props.theme.colors.secondary};
  align-items: center;
  flex: 1;
`
export const Image = styled.Image`
  width: 69%;
  height: 22%;
  top: 22.6%;
`
export const SignupTxt = styled.Text`
  color: ${props => props.theme.colors.secondary};
  font-weight: 600;
  font-size: 19px;
`
export const SignupBtn = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  width: 55%;
  height: 6.8%;
  border-radius: 25px;
  margin-top: 108%;
  margin-bottom: 6%;
`
export const LoginTxt = styled.Text`
  color: ${props => props.theme.colors.primary};
`
export const Button = styled.TouchableOpacity``
