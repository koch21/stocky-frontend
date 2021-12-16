import React, { useContext } from 'react'
import { Container, LogoutTxt, Button } from './styles'

import Header from '../../components/Header'

const Profile = () => {
  return (
    <Container>
      <Header PageName="Profile" />
      <Button onPress={() => {}}>
        <LogoutTxt>Sign Out</LogoutTxt>
      </Button>
    </Container>
  )
}

export default Profile
