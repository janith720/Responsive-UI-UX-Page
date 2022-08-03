import React from 'react';
import './App.css'

import { Brand, CTA, NavBar } from './components'
import { Blog, Footer, Header, Posibility, WhatGPT3 } from './containers';

function App() {
  return (
    <div className='App'>
       <div className='gradient-bg'>
          <NavBar />
          <Header />
       </div>
       <Brand />
       <WhatGPT3 />
       <Posibility />
       <CTA />
       <Blog />
       <Footer />
    </div>
  );
}

export default App;
