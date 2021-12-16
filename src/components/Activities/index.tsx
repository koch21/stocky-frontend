import React from 'react'
import { AntDesign } from '@expo/vector-icons'

import {
  Container,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Yearcard,
  Value,
  Date
} from './styles'
import { useColorScheme } from 'react-native'

interface ActivityProps {
  ChangeColorValue: string
  BlueValue: string
  you: string
  Payd: string
  someone: string
  date: string
  profileImg: any
}

const Activities: React.FC<ActivityProps> = ({ ChangeColorValue, BlueValue, you, Payd, someone, date, profileImg }) => {
  return (
    <Container>
      <Card>
        <CardHeader>
          <Avatar source={profileImg} />
          <Description>
            <Bold>{you}</Bold> {Payd} <Bold>{someone}</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>REAL</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value style={{ color: ChangeColorValue }}>$ {BlueValue}</Value>
            <Yearcard>
              <AntDesign name="calendar" color={useColorScheme() === 'dark' ? '#f2f2f2' : '#121212'} size={14} />
              <Date>{date}</Date>
            </Yearcard>
          </Details>
        </CardFooter>
      </Card>
    </Container>
  )
}

export default Activities
