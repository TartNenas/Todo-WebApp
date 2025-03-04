import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/globalStyles';
import Todo from './components/Todo';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Todo />
      <Footer />
    </ThemeProvider>
  );
};

export default App; 