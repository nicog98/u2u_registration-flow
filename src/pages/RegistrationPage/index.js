import React from 'react';
import styled from 'styled-components';
import { Text, Title, H1, H2 } from '../../components/generic/Text';
import { FormInput } from '../../components/FormInput';

export const RegistrationPage = ({
  ...props
}) => (
  <SRegistrationPage>
    <SContent>
      <SHeader>
        <STitle>Get ready to vote with Up To Us</STitle>
        <H2>Make sure you are ready to vote</H2>
      </SHeader>
      <FormInput title='BIG' placeholder='HELLO' />
    </SContent>
  </SRegistrationPage>
)

const SRegistrationPage = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const SContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`;

const SHeader = styled.div`
  text-align: left;
  margin: 64px 0;
`;

const STitle = styled(Title)`
  margin-bottom: 16px;
`;
