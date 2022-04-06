import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from '../assets/Logo.png';
import SignInput from '../components/SignInput/SignInput';
import CountInput from '../components/CountInput/CountInput';

export default function SignUP() {
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
              />
            );
          })}
        </Birth>
      </LoginAndPwd>
      <GenderBtn>
        <Male>뒤로</Male>
        <Female>확인</Female>
      </GenderBtn>
      <AgreeBtn></AgreeBtn>
    </Container>
  );
}

const SIGNUP_INPUTS = [
  {
    name: 'ID',
    type: 'ID',
    placeholder: '카카오계정 (이메일)',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: '비밀번호',
  },
  {
    name: 'phone',
    type: 'phone',
    placeholder: '비밀번호 확인',
  },
];

const SIGNUP_BIRTH = [
  {
    name: 'year',
    type: 'text',
    placeholder: '년',
  },
  {
    name: 'month',
    type: 'text',
    placeholder: '월',
  },
  {
    name: 'day',
    type: 'text',
    placeholder: '일',
  },
];

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

const GenderBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Male = styled.button`
  display: flex;
  justify-content: center;
  width: 46%;
  padding: 10px;
  font-size: 16px;
  border-radius: 12px;
  background-color: #f2f2f2;
  /* background-color: #fee500; */
`;

const Female = styled.button`
  display: flex;
  justify-content: center;
  width: 46%;
  padding: 10px;
  font-size: 16px;
  border-radius: 12px;

  background-color: #f2f2f2;
`;

const Phone = styled.div`
  display: flex;
`;

const AgreeBtn = styled.div`
  display: flex;
`;
