import React from 'react'
import './Features.css'

function Features({title, text}) {
  return (
    <div className='gpt3__features-container__feature'>
      <div className="gpt3__features-container-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container-text">
        {text}
      </div>
    </div>
  )
}

export default Features