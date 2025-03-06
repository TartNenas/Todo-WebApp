import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/globalStyles';
import Todo from './components/Todo';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <AppWrapper>
        <Todo />
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App; 