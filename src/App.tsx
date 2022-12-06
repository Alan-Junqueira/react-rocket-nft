import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { useRef } from 'react';

function App() {
  const containerRef = useRef(null);
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
          <Home />
    </ThemeProvider>
  );
}

export default App;
