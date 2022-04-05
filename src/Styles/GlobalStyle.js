import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

html, body {
  font-family: 'Noto Sans KR', sans-serif;
}
`;

export default GlobalStyle;
