import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  border: 0;
  padding: 0;
  margin: 0;
  outline: 0;
  color: ${props => props.theme.white}
}

body {
  background-color: ${props => props.theme["gray-700"]};
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
`





