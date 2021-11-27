import React from 'react';
import styled from 'styled-components';
import { Input } from './generic/Input';
import { Text } from './generic/Text';

export const FormInput = ({
  title,
  ...props
}) => (
  <SFormInput {...props}>
    <STitle>{title}</STitle>
    <Input />
  </SFormInput>
)

const SFormInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const STitle = styled(Text)`
  text-align: left;
  margin-bottom: 8px;
`;
