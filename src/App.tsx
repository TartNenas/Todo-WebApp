import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/globalStyles';
import Todo from './components/Todo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Changelog from './changelog';
import styled from 'styled-components';
import { RoutineProvider } from './context/RoutineContext';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  margin-top: 120px; /* Increased from 80px to push content lower */
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <RoutineProvider>
        <Router>
          <AppWrapper>
            <Navbar />
            <ContentContainer>
              <Routes>
                <Route path="/" element={<Todo />} />
                <Route path="/changelog" element={<Changelog />} />
              </Routes>
            </ContentContainer>
            <Footer />
          </AppWrapper>
        </Router>
      </RoutineProvider>
    </ThemeProvider>
  );
};

export default App; 