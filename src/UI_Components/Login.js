import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/Logo.png';
import SignInput from '../components/SignInput/SignInput';

export default function Login() {
  const navigate = useNavigate();
  const goToSign = () => {
    navigate('/SignUp');
  };

  const [idText, setIdText] = useState('');
  const [pwText, setPwText] = useState('');

  const handleId = e => {
    setIdText(e.target.value);
  };

  const handlePw = e => {
    setPwText(e.target.value);
  };

  const isVariable = idText.includes('@') && pwText.length > 5;

  const isTrue = () =>
    isVariable ? alert('로그인 성공') : alert('로그인 실패!');

  const SIGNUP_INPUTS = [
    {
      name: 'ID',
      type: 'ID',
      placeholder: '카카오계정 (이메일)',
      onchange: handleId,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: '비밀번호',
      onchange: handlePw,
    },
  ];

  // console.log(isVariable);
  // console.log(idText);
  // console.log(pwText);

  return (
    <Container>
      <Title />
      <LoginAndPwd>
        {SIGNUP_INPUTS.map(element => {
          return (
            <SignInput
              key={element.name}
              name={element.name}
              type={element.type}
              value={element.value}
              placeholder={element.placeholder}
              onchange={element.onchange}
            />
          );
        })}
        <LoginBtn isVariable={isVariable} onClick={isTrue}>
          로그인
        </LoginBtn>
      </LoginAndPwd>
      <BottomMenu>
        <SignBtn onClick={goToSign}>회원가입</SignBtn>
        <Etc>카카오계정 | 비밀번호 찾기</Etc>
      </BottomMenu>
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

const LoginAndPwd = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 12px;
  width: 100%;
  padding: 14px 18px 14px 18px;
  margin-top: 40px;
  font-size: 16px;
  background-color: ${props => (props.isVariable ? '#fee500' : '#eaeaea')};

  /* background-color: #eaeaea; */
  /* background-color: #fee500; */
`;

const BottomMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
`;

const SignBtn = styled.button`
  background-color: white;
  font-size: 12px;
  border-bottom: 1px solid #c4c4c4;
  cursor: pointer;
`;

const Etc = styled.div`
  font-size: 12px;
`;
