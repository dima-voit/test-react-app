import React from 'react';

import { Aside, Content, Footer, Header } from './components';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Aside />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
