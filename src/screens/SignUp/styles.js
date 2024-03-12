import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AreaInput = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  background-color: #FFF;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 5px;
  color: #111;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 200px;
  height: 45px;
  border-radius: 5px;
  background-color: #3b3dbf;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`

export const SubmitText = styled.Text`
  color: #FFF;
  font-size: 20px;
`
export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`

export const LinkText = styled.Text`
  
`