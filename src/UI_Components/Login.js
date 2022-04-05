import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/Logo.png';

export default function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/SignUp');
  };
  // const [productNum, setProductNum] = useState('');
  // const handleProductNum = e => {
  //   setProductNum(e.target.value);
  // };

  return (
    <Container>
      <Title />
      <LoginAndPwd>
        <Log />
        <Pwd />
        <Btn>로그인</Btn>
      </LoginAndPwd>
      <BottomMenu>
        <SignBtn onClick={goToMain}>회원가입</SignBtn>
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

const Log = styled.input.attrs(props => ({
  type: 'text',
  placeholder: '카카오계정 (이메일)',
}))`
  color: #000000;
  font-size: 16px;
  padding: 10px 10px 10px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #c4c4c4;
  &:focus {
    outline: none;
  }
`;

const Pwd = styled.input.attrs(props => ({
  type: 'text',
  placeholder: '비밀번호',
}))`
  color: #000000;
  font-size: 16px;
  padding: 10px 10px 10px 0;
  border-bottom: 1px solid #c4c4c4;
  &:focus {
    outline: none;
  }
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 12px;
  width: 100%;
  padding: 14px 18px 14px 18px;
  margin-top: 40px;
  font-size: 16px;
  background-color: #fee500;
`;

const BottomMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
`;

const SignBtn = styled.button`
  font-size: 12px;
  border-bottom: 1px solid #c4c4c4;
`;

const Etc = styled.div`
  font-size: 12px;
`;
