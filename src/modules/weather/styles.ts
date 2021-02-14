import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffaf40;
  width: 100%;
`;

export const Text = styled.Text<{
  color?: string;
  margin?: boolean;
  strong?: boolean;
  size?: string;
}>`
  color: ${(props) => props.color ?? '#4b4b4b'};
  font-weight: ${(props) => (props.strong ? 700 : 500)};
  font-size: ${(props) => props.size ?? '16px'};
  margin-vertical: ${(props) => (props.margin ? '10px' : '0')};
`;

export const Button = styled.TouchableOpacity`
  width: 65%;
  height: 50px;
  background-color: ${(prop) => (prop.disabled ? '#dad8e6' : '#cd84f1')};
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding-horizontal: 20px;
`;

export const TextInput = styled.TextInput`
  width: 80%;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-color: gray;
  border-width: 1px;
  padding-horizontal: 10px;
`;
