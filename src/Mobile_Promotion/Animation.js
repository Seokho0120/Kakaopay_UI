import React from 'react';
import styled, { keyframes } from 'styled-components';
import MobileCard from '../assets/MobileCard.png';
import MobileText from '../assets/MobileText.png';
import MobileCharacter from '../assets/MobileCharacter.png';
import Light from '../assets/Light.png';

export default function MobileAnimation() {
  return (
    <Container>
      <TitleText />
      <CardContainer>
        <Lights />
        <CardImg />
        <Character />
      </CardContainer>
      <Btn>즉시 발급하기</Btn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.mainGreenColor};
`;

const TitleText = styled.img.attrs({
  src: `${MobileText}`,
})`
  width: 70vw;
  margin-bottom: 40px;
`;

const CardContainer = styled.div`
  position: relative;
`;

const LightAni = keyframes`
  0% {
    transform: translate(0);
    transform: scale(0);
    visibility: visible;
  }
  50% {
    transform: translate(10%, 0);
    transform: scale(1);
  }
  90% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(0);
    transform: scale(0);
  }
`;

const Lights = styled.img.attrs({
  src: `${Light}`,
})`
  position: absolute;
  visibility: hidden;
  width: 30vw;
  top: -2.5%;
  left: 5%;
  animation: ${LightAni} 1.5s alternate;
  animation-delay: 0.5s;
`;

const CardImg = styled.img.attrs({
  src: `${MobileCard}`,
})`
  width: 60vw;
`;

const CharacterAni = keyframes`
  0% {
    transform: translate(0);
    transform: scale(0);
    visibility: visible;
  }
  50% {
    transform: translate(0, 200%);
    transform: scale(1);
  }
  100% {
    transform: translate(0, 380%);
  }
`;

const Character = styled.img.attrs({
  src: `${MobileCharacter}`,
})`
  position: absolute;
  visibility: hidden;
  width: 14vw;
  top: 8%;
  left: 94%;
  animation: ${CharacterAni} 1.5s alternate;
  animation-delay: 2s;
`;

const BtnAni = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.05);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  background-color: #0a4c37;
  color: #68bc8e;
  margin-top: 20px;
  border-radius: 12px;
  width: 100%;
  padding: 16px;
  font-size: ${({ theme }) => theme.fontSize.fontLargeMedium};
  animation: ${BtnAni} 1.5s alternate;
  animation-delay: 0.5s;
`;
