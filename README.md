## KaKaoPay UI Developer

카카오페이 UI 개발자 사전과제를 소개합니다. <br>
**해상도 320px 기준(iPhone5/SE)** 으로 구현했습니다.

### Overview

- 필수 조건과 간단한 유효성 검사를 설정한 로그인 및 회원가입 페이지를 구현했습니다.
- keyframe을 활용해 모바일 프로모션 애니메이션을 구현했습니다.
- 공통 컴포넌트와 글로벌 스타일을 활용해 재사용 가능한 컴포넌트를 조합하여 페이지를 구축했습니다.

### 개발 기간

- 2022.04.05(화) ~ 2022.04.07(목)

### Tech Stack

- JavaScript(ES6) | React | React Router | Styled-component | eslint | prettier

<br>

## UI컴포넌트 (로그인 & 회원가입)

- 로그인 페이지를 구현해 자연스럽게 회원가입 페이지로 넘어가는 플로우를 구축했습니다.
- 필수 조건과 간단한 유효성 검사를 설정하여 회원가입 페이지를 구현했습니다.

### 실행 방법

1. npm start
2. 개발자 도구에서 모바일 iPhone5/SE 설정
3. 로그인 페이지 /Login 입력 (http://localhost:3000/Login)
4. 회원가입 페이지 /SignUp 입력 (http://localhost:3000/SignUp) or 로그인 페이지에서 '회원가입' 클릭

### 로그인 조건

- 계정 : '@' 필수 입력
- 비밀번호 : 5글자 이상 필수 입력
- 알림 및 활성화 : 조건에 부합하면 로그인 버튼 활성화 및 '로그인 성공' 알림, 부합하지 않으면 '로그인 실패' 알림

**로그인 성공**

![카카오 로그인 성공](https://user-images.githubusercontent.com/93597794/162226618-4033eab3-afa8-4e9d-ae89-8f9c72999f78.gif)

**로그인 실패**

![카카오 로그인 실패](https://user-images.githubusercontent.com/93597794/162226614-6cd290c0-e017-4d9c-8f50-1652eeaf2aa0.gif)

### 회원가입 조건

- 계정 : '@' 필수 입력
- 비밀번호 : 5글자 이상 필수 입력
- 비밀번호 확인 : 비밀번호와 같은 글자 수
- 이름 : 2글자 이상 및 동일
- 생년월일 : 1990 ~ 2021년, 1월 ~ 12월, 1 ~ 31일 필수 입력
- 알림 및 활성화 : 조건에 부합하면 확인 버튼 활성화 및 '회원가입 성공' 알림, 부합하지 않으면 '회원가입 실패' 알림

**회원가입 성공**

![카카오 회원가입 성공](https://user-images.githubusercontent.com/93597794/162226610-c0f58b42-5ccd-445d-af19-1c57072864e4.gif)

**회원가입 실패**

![카카오 회원가입 실패](https://user-images.githubusercontent.com/93597794/162226602-c21ad49e-7725-4d36-9002-8747045a40af.gif)

<br>

## 모바일 프로모션 개발

- keyframe을 활용해 애니메이션을 구현했습니다.
- 캐릭터 위치 이동, 하이라이트 위치 이동, 버튼 스케일 활성화

### 실행 방법

1. npm start
2. 개발자 도구에서 모바일 iPhone5/SE 설정
3. /MobileAnimation 입력 (http://localhost:3000/mobileanimation)
4. 애니메이션 활성화 : 페이지 오픈 or 새로고침

**애니메이션 활성화**

![모바일 애니메이션](https://user-images.githubusercontent.com/93597794/162231825-3c201958-5e96-4afd-9c67-b10b28ce9684.gif)
