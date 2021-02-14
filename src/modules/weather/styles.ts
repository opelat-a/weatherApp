import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffaf40;
`;

export const Text = styled.Text<{color?: string}>`
  color: ${(props) => props.color || 'white'};
`;

export const Button = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  background-color: ${(prop) => (prop.disabled ? '#dad8e6' : '#7158e2')};
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding-horizontal: 20px;
`;

export const TextInput = styled.TextInput`
  width: 90%;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-color: gray;
  border-width: 1px;
`;
