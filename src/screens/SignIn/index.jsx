import { useContext } from 'react'
import { Platform } from "react-native";
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Content,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText
} from './styles'

import { AuthContext } from '../../contexts/auth'

import logoImg from '../../assets/logo.png'

export function SignIn() {
  const navigation = useNavigation()
  const { user } = useContext(AuthContext)

  function handleLogin() {
    //console.log(user)
  }

  return (
    <Container>
      <Content
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo
          source={logoImg}
        />
        <AreaInput>
          <Input placeholder="Seu email" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Sua senha" />
        </AreaInput>
        <SubmitButton onPress={handleLogin}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link onPress={() => navigation.navigate("SignUp")}>
          <LinkText>Criar Conta!</LinkText>
        </Link>
      </Content>
    </Container>
  )
}