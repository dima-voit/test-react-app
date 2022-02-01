import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Aside, Footer, Header } from './components';
import Profile from './pages/Profile';
import './App.scss'

function App() {
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
