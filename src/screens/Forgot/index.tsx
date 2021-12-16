import React, { useContext, useState } from 'react'
import { Container, Header, ResetTxt, InfoTxt, Resetbtn, ForgotTxt, Image, InputView, InputTxt, Bottom } from './styles'
import { KeyboardAvoidingView } from 'react-native'
import { useDark } from '../../contexts/darkContext'

const Forgot = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('')

  const isDark = useDark()

  return (
    <Container>
      <KeyboardAvoidingView keyboardVerticalOffset={1} behavior={'position'}>
        <Image
          source={isDark ? require('../../assets/images/logo_dark.png') : require('../../assets/images/logo_light.png')}
        />
        <Bottom>
          <InputView>
            <InputTxt
              autoCorrect={false}
              autoCapitalize="none"
              autoCompleteType="email"
              onChangeText={email => setEmail(email.trim())}
              value={email}
              placeholder="Email address"
              placeholderTextColor={isDark ? '#f2f2f2' : '#121212'}
            />
          </InputView>
          <Resetbtn onPress={() => navigation.navigate('NewPassword')}>
            <ResetTxt>Reset Password</ResetTxt>
          </Resetbtn>
        </Bottom>
      </KeyboardAvoidingView>
      <Header>
        <ForgotTxt>Forgot Password?</ForgotTxt>
        <InfoTxt>Enter your registrated email address to receive password reset instruction</InfoTxt>
      </Header>
    </Container>
  )
}

export default Forgot
