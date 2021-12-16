import React, { useContext, useState } from 'react'
import { Container, CreateTxt, InputView, InputTxt, RegisterBtn, RegisterTxt, Image, Header, Bottom } from './styles'
import { KeyboardAvoidingView } from 'react-native'
import { useDark } from '../../contexts/darkContext'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [HasError, setHasError] = useState('')
  const [loading, setLoading] = useState(false)

  const isDark = useDark()

  async function handleSubmit() {
    if (password !== repassword) {
      throw setHasError('Passwords do not match')
    }
    try {
      setLoading(true)
      await {}
    } catch {
      setHasError('Failed to create an account')
    }

    setLoading(false)
  }

  return (
    <Container>
      {/* header is below bottom */}
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
              placeholder="Email..."
              placeholderTextColor={isDark ? '#f2f2f2' : '#121212'}
              onChangeText={email => setEmail(email)}
              value={email}
            />
          </InputView>
          <InputView>
            <InputTxt
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
              placeholder="Password..."
              placeholderTextColor={isDark ? '#f2f2f2' : '#121212'}
              onChangeText={password => setPassword(password)}
              value={password}
            />
          </InputView>
          <InputView>
            <InputTxt
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
              placeholder="Confirm Password..."
              placeholderTextColor={isDark ? '#f2f2f2' : '#121212'}
              onChangeText={repassword => setRepassword(repassword)}
              value={repassword}
            />
          </InputView>
          <RegisterBtn disabled={loading} onPress={() => handleSubmit()}>
            <RegisterTxt>Register</RegisterTxt>
          </RegisterBtn>
        </Bottom>
      </KeyboardAvoidingView>
      <Header>
        <CreateTxt>Create Account</CreateTxt>
      </Header>
    </Container>
  )
}

export default SignUp
