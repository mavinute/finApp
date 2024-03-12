import { Platform } from "react-native";
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Content,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText
} from './styles'

export function SignUp() {
  const navigation = useNavigation()

  return (
    <Container>
      <Content
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <AreaInput>
          <Input placeholder="Seu nome" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Seu email" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Sua senha" />
        </AreaInput>
        <SubmitButton>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
        <Link onPress={() => navigation.navigate("SignIn")}>
          <LinkText>Voltar ao inicio</LinkText>
        </Link>
      </Content>
    </Container>
  )
}