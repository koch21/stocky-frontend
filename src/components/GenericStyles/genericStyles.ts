import styled from 'styled-components/native'

export const DefaultContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
  padding: 16px;

  justify-content: center;
  align-items: center;
`

export const DefaultBox = styled.View`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  background-color: ${props => props.theme.colors.secondary};
  border-radius: ${props => props.width / 2 || 40};
  justify-content: center;
  align-items: center;
`

export const DefaultText = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.secondary};
`

export const DefaultButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.secondary};
  padding: 8px;
  border-radius: 4px;
  margin-top: 8px;
`

export const DefaultButtonText = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.primary};
  text-align: center;
`

export const DefaultInput = styled.TextInput`
  background-color: ${props => props.theme.colors.gray};
  padding: 8px;
  border-radius: 4px;
  margin-top: 8px;
`

export const DefaultList = styled.FlatList`
  background-color: ${props => props.theme.colors.primary};
`

export const DefaultListItem = styled.View`
  background-color: ${props => props.theme.colors.secondary};
  padding: 8px;
  border-radius: 4px;
  margin-top: 8px;
`

export const DefaultListItemText = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.secondary};
`

export const DefaultShadow = styled.View`
  shadow-color: ${props => props.theme.colors.secondary};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 2px;
  elevation: 2;
`

export const DefaultModal = styled.View`
  background-color: ${props => props.theme.colors.secondary};
  padding: 16px;
  border-radius: 4px;
  margin-top: 8px;
`
