import React from 'react';
import './App.css'


import { Blogs, Footer, Header, Possibility, WhatGPT3, Feature} from './containers';
import { Cta, Brand, Navbar} from './components';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <Cta />
      <Blogs />
      <Footer />

    </div> 

  )
}

export default App
 