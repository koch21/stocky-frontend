import React from 'react'
import { Container } from './styles'

import Header from '../../components/Header'

const Home: React.FC = ({ children }) => {
  return (
    <Container>
      <Header PageName="Home" />
    </Container>
  )
}

export default Home
