import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/Logo.png';
import SignInput from '../components/SignInput/SignInput';
import BirthInput from '../components/CountInput/CountInput';
import BtnForm from '../components/Button/BtnForm';

export default function SignUP() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/Login');
  };

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    year: '',
    month: '',
    day: '',
  });

  const handlerForm = e => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const { year, month, day } = userInfo;
  const yearCheck = 1900 <= year && year <= 2021;
  const monthCheck = 1 <= month && month <= 12;
  const dayCheck = 1 <= day && day <= 31;
  const birthValidate = yearCheck && monthCheck && dayCheck;

  const isSignUpVariable =
    userInfo.email.includes('@') &&
    userInfo.password.length > 5 &&
    userInfo.password.length === userInfo.confirmPassword.length &&
    userInfo.name.length >= 2 &&
    birthValidate;

  const isTrue = () =>
    isSignUpVariable ? alert('로그인 성공') : alert('로그인 실패!');

  const SIGNUP_INPUTS = [
    {
      name: 'email',
      type: 'id',
      placeholder: '카카오계정 (이메일)',
      onchange: handlerForm,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: '비밀번호',
      onchange: handlerForm,
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: '비밀번호 확인',
      onchange: handlerForm,
    },
    {
      name: 'name',
      type: 'name',
      placeholder: '이름',
      onchange: handlerForm,
    },
  ];

  const SIGNUP_BIRTH = [
    {
      name: 'year',
      type: 'number',
      placeholder: '년',
      onchange: handlerForm,
    },
    {
      name: 'month',
      type: 'number',
      placeholder: '월',
      onchange: handlerForm,
    },
    {
      name: 'day',
      type: 'number',
      placeholder: '일',
      onchange: handlerForm,
    },
  ];

  return (
    <Container>
      <Title />
      <SignContainer>
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
        <BirthContainer>
          {SIGNUP_BIRTH.map(element => {
            return (
              <BirthInput
                key={element.name}
                name={element.name}
                type={element.type}
                placeholder={element.placeholder}
                onchange={element.onchange}
              />
            );
          })}
        </BirthContainer>
      </SignContainer>
      <SignBtn>
        <BtnForm onClick={goToLogin} text="뒤로" />
        <BtnForm
          text="확인"
          isSignUpVariable={isSignUpVariable}
          onClick={isTrue}
        />
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
  margin-bottom: 30px;
`;

const SignUpTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.fontLarge};
  margin-bottom: 10px;
`;

const SignUpSub = styled.div`
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  margin-bottom: 26px;
`;

const SignContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BirthContainer = styled.div`
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
