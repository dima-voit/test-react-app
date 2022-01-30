import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Aside, Footer, Header, Profile } from './components';
import { useTheme } from './hooks/use-theme';

function App() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <Aside />
          <Profile />
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
