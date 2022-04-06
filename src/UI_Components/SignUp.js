import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/Logo.png';
import SignInput from '../components/SignInput/SignInput';
import CountInput from '../components/CountInput/CountInput';

export default function SignUP() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/Login');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');

  const onEmailHandler = e => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = e => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPasswordHandler = e => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onNameHandler = e => {
    setName(e.currentTarget.value);
  };

  const isSignUpVariable =
    email.includes('@') &&
    password.length > 5 &&
    password.length === confirmPassword.length &&
    name.length >= 2;

  const isTrue = () =>
    isSignUpVariable ? alert('로그인 성공') : alert('로그인 실패!');

  const SIGNUP_INPUTS = [
    {
      name: 'ID',
      type: 'ID',
      placeholder: '카카오계정 (이메일)',
      onchange: onEmailHandler,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: '비밀번호',
      onchange: onPasswordHandler,
    },
    {
      name: 'ConfirmPassword',
      type: 'password',
      placeholder: '비밀번호 확인',
      onchange: onConfirmPasswordHandler,
    },
    {
      name: 'name',
      type: 'name',
      placeholder: '이름',
      onchange: onNameHandler,
    },
  ];

  const SIGNUP_BIRTH = [
    {
      name: 'year',
      type: 'number',
      placeholder: '년',
    },
    {
      name: 'month',
      type: 'number',
      placeholder: '월',
    },
    {
      name: 'day',
      type: 'number',
      placeholder: '일',
    },
  ];

  return (
    <Container>
      <Title />
      <LoginAndPwd>
        <SignUpTitle>회원가입</SignUpTitle>
        <SignUpSub>계정으로 사용할 이메일 주소를 입력하세요.</SignUpSub>
        {SIGNUP_INPUTS.map(element => {
          return (
            <SignInput
              key={element.name}
              name={element.name}
              type={element.type}
              placeholder={element.placeholder}
              onchange={element.onchange}
            />
          );
        })}
        <Birth>
          {SIGNUP_BIRTH.map(element => {
            return (
              <CountInput
                key={element.name}
                name={element.name}
                type={element.type}
                placeholder={element.placeholder}
                onchange={element.onchange}
              />
            );
          })}
        </Birth>
      </LoginAndPwd>
      <SignBtn>
        <Back onClick={goToLogin}>뒤로</Back>
        <Confirm isSignUpVariable={isSignUpVariable} onClick={isTrue}>
          확인
        </Confirm>
      </SignBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Title = styled.img.attrs({
  src: `${Logo}`,
})`
  width: 60vw;
  margin: 60px;
`;

const SignUpTitle = styled.div`
  font-size: 28px;
  margin-bottom: 20px;
`;

const SignUpSub = styled.div`
  font-size: 12px;
  margin-bottom: 26px;
`;

const LoginAndPwd = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Birth = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SignBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const Back = styled.button`
  display: flex;
  justify-content: center;
  width: 48%;
  padding: 10px;
  font-size: 16px;
  border-radius: 12px;
  background-color: #f2f2f2;
  &:hover {
    background-color: #fee500;
    cursor: pointer;
  }
`;

const Confirm = styled.button`
  display: flex;
  justify-content: center;
  width: 48%;
  padding: 10px;
  font-size: 16px;
  border-radius: 12px;
  background-color: #f2f2f2;
  &:hover {
    background-color: #fee500;
    cursor: pointer;
  }
`;
