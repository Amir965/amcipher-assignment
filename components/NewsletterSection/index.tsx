import React from 'react'

function NewsLetter() {
    const handleSubmit = () => {
        
    }
  return (
    <div className='newsletter-body'>
          <label>Subscribe our NewsLetter &</label>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <input type="email" placeholder='Your Email..' />
          <button onClick={()=>handleSubmit()}>Submit</button>
    </div>
  )
}

export default NewsLetter;
