import React from 'react';
import styled, { css } from 'styled-components';

const textStyle = css`
  font-family: 'Helvetica Neue';
`;

const boldTextStyle = css`
  ${textStyle};
  font-weight: bold;
`;

export const Text = styled.div`
  ${textStyle};
  font-size: 14px;
`;

export const H1 = styled.div`
  ${boldTextStyle};
  text-transform: uppercase;
  font-size: 24px;
`;

export const H2 = styled.div`
  ${textStyle};
  font-size: 20px;
`;

export const Title = styled.div`
  ${boldTextStyle};
  font-size: 48px;
  text-transform: uppercase;
`;