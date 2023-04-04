import React from 'react';
import './App.css'


import { Blogs, Footer, Header, Possibility, WhatGPT3} from './containers';
import { Cta, Brand, Navbar, Features} from './components';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blogs />
      <Footer />

    </div> 

  )
}

export default App
 