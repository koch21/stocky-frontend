import React from 'react'
import { Container } from './styles'

import NotificationCard from '../../components/NotificationCard'
import Header from '../../components/Header'

const Notifications = () => {
  return (
    <Container>
      <Header PageName="Notifications" />
      <NotificationCard />
    </Container>
  )
}

export default Notifications
