import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 8px;
  padding: 0 16px;
`;

export const Card = styled.View`
  background: ${(props) => props.theme.colors.grey};
  border-radius: 8px;
  padding: 16px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  margin-top: 2px;
  width: 36px;
  height: 36px;
  border-radius: 20px;
`;

export const Description = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  margin-left: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const CardBody = styled.View``;

export const UserName = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: 18px;
`;

export const CardFooter = styled.View`
  margin-top: 8px;
`;

export const Details = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Yearcard = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 15.2px;
  font-weight: bold;
`;

export const Date = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: 15.2px;
  margin-left: 5px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;
