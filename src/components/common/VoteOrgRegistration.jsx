import React from 'react';
import styled from 'styled-components';
import IframeResizer from 'iframe-resizer-react';

export const VoteOrgRegistration = ({
  ...props
}) => (
  <SForm
    title='registration'
    src="https://register.vote.org/?partner=111111&campaign=free-tools"
    width='100%'
    id="frame1"
    scrollable="no"
  />
)

const SForm = styled(IframeResizer)`
  border: none;
`;
