import React, { useContext, useState } from 'react'
import {
  Container,
  WelcomeTxt,
  InputView,
  InputTxt,
  LoginBtn,
  LoginTxt,
  ForgotTxt,
  SignupTxt,
  Button,
  Image,
  Header,
  Bottom
} from './styles'
import { KeyboardAvoidingView } from 'react-native'
import { useDark } from '../../contexts/darkContext'

const SignIn = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
          <InputView>
            <InputTxt
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={password => setPassword(password.trim())}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={isDark ? '#f2f2f2' : '#121212'}
            />
          </InputView>
          <Button onPress={() => navigation.navigate('Forgot')}>
            <ForgotTxt>Forgot your password?</ForgotTxt>
          </Button>
          <LoginBtn onPress={() => {}}>
            <LoginTxt>Login</LoginTxt>
          </LoginBtn>
          <Button onPress={() => navigation.navigate('SignUp')}>
            <SignupTxt>Don’t have an account? Sign Up</SignupTxt>
          </Button>
        </Bottom>
      </KeyboardAvoidingView>
      <Header>
        <WelcomeTxt>Welcome Back!</WelcomeTxt>
      </Header>
    </Container>
  )
}

export default SignIn
