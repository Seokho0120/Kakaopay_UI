import React from 'react';
import styled from 'styled-components';

export default function BtnForm({ text, ...handler }) {
  return <Button {...handler}>{text}</Button>;
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 48%;
  padding: 5px;
  font-size: ${({ theme }) => theme.fontSize.fontMedium};
  border-radius: 12px;
  background-color: ${props =>
    props.isSignUpVariable
      ? ({ theme }) => theme.color.mainYellow
      : ({ theme }) => theme.color.LightGreyColor};
  &:hover {
    background-color: ${({ theme }) => theme.color.mainYellow};
    cursor: pointer;
  }
`;
