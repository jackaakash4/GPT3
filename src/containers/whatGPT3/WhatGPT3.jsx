import React from 'react'
import './WhatGPT3.css'
import Features from '../../components/features/Features'

function WhatGPT3() {
  return (
    <div>
      <div className="gpt3__whatgpt3 section_margin" id='wgpt3'>
        <div className="gpt3__whatgpt3-feature">
          <Features />
        </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
          <p>Explore the library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
          <Features />
          <Features />
          <Features />
        </div>
      </div>
    </div>
  )
}

export default WhatGPT3