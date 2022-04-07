import React from 'react';
import styled from 'styled-components';

export default function SignInput({
  name,
  type,
  placeholder,
  value,
  onchange,
}) {
  return (
    <InputForm
      name={name}
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      onChange={onchange}
    />
  );
}

const InputForm = styled.input`
  color: #000000;
  font-size: ${({ theme }) => theme.fontSize.fontMedium};
  padding: 10px 10px 10px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.GreyColor};
  &:focus {
    outline: none;
  }
`;
