import React from 'react';
import styled from 'styled-components';
import { FormInput } from './common/FormInput';
import { FormSelect } from './common/FormSelect';

export const RegistrationForm = ({
  ...props
}) => (
  <form {...props}>
    <SHorizontalInputs>
      <FormInput title='Legal first name' />
      <FormInput title='Last name' />
      <FormSelect 
        title='Suffix'
        options={[
          '--',
          'Jr.',
          'Sr.',
          'II',
          'III',
          'IV',
        ]}
      />
    </SHorizontalInputs>
    <SInputRow title='Street Address' />
    <SInputRow title='Zip Code' />
    <SInputRow title='Phone Number' />
    <SInputRow title='Email Address' />
  </form>
);

const SHorizontalInputs = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;

const SInputRow = styled(FormInput)`
  margin-bottom: 16px;
`;
