import React from 'react';

import { Aside, Footer, Header, Profile } from './components';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Aside />
        <Profile />
        <Footer />
      </div>
    </div>
  );
}

export default App;
