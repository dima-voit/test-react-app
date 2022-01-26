import React from 'react';

import { Navbar } from './components';
import { Aside, Footer, Header } from './containers';

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
