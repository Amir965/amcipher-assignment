import React from 'react'

const FormBox = () => {
  return (
      <div className='form-container'>
          <div className="form-contant">
              <p>Create Your<span> Free Account</span></p>
              <div className='field'>
                <label htmlFor="email">Email Address</label>
              <input type="email" placeholder='creativelayers088@gmail.com' />
              </div>
              <div className='field'>
              <label htmlFor='password'>Password</label>
                  <input type="password" name="password" id="" placeholder='**********' />
              </div>
              <div className="button-section">
                  <button>Start Learning For Free</button>
                  <p>By continuing, you accept our Terms of Use, our Privacy Policy and that your data is stored in the USA. You confirm you are at least 16 years old (13 if you are an authorized Classrooms user).</p>
              </div>
          </div>
    </div>
  )
}

export default FormBox;