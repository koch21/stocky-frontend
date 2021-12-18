import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${props => props.theme.colors.secondary};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 0 16px;
  padding-top: 5%;
  padding-bottom: 16px;
`
export const MenuButton = styled.TouchableOpacity`
  color: ${props => props.theme.colors.primary};
  font-size: 20px;
  font-weight: bold;
`
export const Bold = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: 19px;
  font-weight: bold;
`
