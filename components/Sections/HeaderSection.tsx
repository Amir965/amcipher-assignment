import React from 'react'
import FormBox from './form-box'
import TextBox from './text-box'

const HeaderSection = () => {
  return (
    <div className='slider'>
          <div className="slider-container">
              <div>
                  <TextBox /> 
              </div>
              <div>
                  <FormBox />
                  </div>
            </div>
    </div>
  )
}

export default HeaderSection
