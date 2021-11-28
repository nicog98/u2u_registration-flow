import React from 'react';
import styled from 'styled-components';
import { Text } from '../generic/Text';

export const FormSelect = ({
  title,
  options,
  ...props
}) => (
  <SFormSelect>
    <STitle>{title}</STitle>
    <SSelect>
      {options.map((option) => <SOption value={option}>{option}</SOption>)}
    </SSelect>
  </SFormSelect>
)

const SFormSelect = styled.div``;

const STitle = styled(Text)`
  text-align: left;
  margin-bottom: 8px;
`;

const SSelect = styled.select``;

const SOption = styled.option``;
