import Image from 'next/image';
import React from 'react'

const Nav = () => {
  return (
      <div className='nav-container'>
          <div className="logo">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="22" fill="url(#paint0_linear_1_2265)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.999 23.5386L14.4985 24.4175V26.1727V27.9304V29.6856V31.4407L15.998 32.3196L17.4975 33.1984L18.997 34.0773L20.4965 34.9561L21.9959 35.835L23.4954 36.7138L24.9949 37.5927L26.4944 36.7138L27.9939 35.835L29.4934 34.9561L30.9929 34.0773L32.4924 33.1984L33.9919 32.3196L35.4914 31.4407V29.6856V27.9304V26.1727V24.4175L36.9909 23.5386V26.7172C36.8668 26.7932 36.7832 26.9376 36.7832 27.0895C36.7832 27.2415 36.8541 27.363 36.9605 27.4416L36.9098 27.5961L36.6084 28.5382H37.2112H37.8141L37.5127 27.5961L37.462 27.4416C37.5709 27.363 37.6393 27.2567 37.6393 27.0895C37.6393 26.9224 37.5177 26.7375 37.3506 26.6767V23.3259L25.3622 16.3001L25.7244 16.0874L37.7254 23.1131L38.5005 22.6598L40 21.7809L38.5005 20.9021L37.001 20.0232L35.5015 19.1444L33.9995 18.2681L32.5 17.3892L31.0005 16.5103L29.501 15.634L28.0015 14.7552L26.502 13.8763L25 13L23.5005 13.8789L22.001 14.7577L20.499 15.634L18.9995 16.5129L17.5 17.3917L16.0005 18.2681L14.501 19.1469L13.0015 20.0258L11.502 20.9046L10 21.7809L11.4995 22.6598L12.999 23.5386ZM23.5005 20.9046L25 20.0258L26.4995 20.9046L27.999 21.7835L26.4995 22.6623L25 23.5412L23.5005 24.4175V26.1752L25 27.0541L26.4995 26.1752L27.999 25.2963L29.4985 24.4175L30.998 23.5386L32.4975 22.6598L33.5284 22.0545L33.997 21.7809L32.7229 21.0363L32.4975 20.9046L30.998 20.0258L29.4985 19.1469L28.0015 18.2681L26.502 17.3892L25.0025 16.5103L23.5005 17.3917L22.001 18.2681L20.5015 19.1469L19.002 20.0258L17.5025 20.9046L16.003 21.7835L17.5025 22.6623V24.4175V26.1727V27.9304V28.832V29.6856L19.002 30.5644L20.5015 31.4433L22.001 32.3221L23.5005 33.201L25 34.0798L26.4995 33.201L27.999 32.3221L29.4985 31.4433L30.998 30.5644L32.4975 29.6856V27.9304V26.1727L30.998 27.0515L29.4985 27.9304L27.999 28.8092L26.4995 29.6881L25 30.5669L23.5005 29.6856L22.001 28.8067L20.5015 27.9278V22.6598L22.001 21.7809L23.5005 20.9046Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_1_2265" x1="39" y1="45" x2="5" y2="6" gradientUnits="userSpaceOnUse">
<stop stop-color="#6440FB"/>
<stop offset="1" stop-color="#8466FF"/>
</linearGradient>
</defs>
</svg>
              <label className='educat'>Educrat</label>
          </div>
          <div className="category">
              <Image src={require("../../assets/hambergur.png")} alt="menu" width={20} height={15} /> 
              <p className='explore'>Explore</p>
          </div>
          <div className="search-bar">
              <input type="text" placeholder='What do you want to learn?' />
              <Image src={require("../../assets/search.png")} alt="search"/>
          </div>
          <div className='web'>
              <div className="web-option">
              <a href='#'>Home</a>
                      <svg
                          width="20"
                          height="15"
                          viewBox="0 0 9 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/
                          svg"
                      className='option-icon'>
<path d="M4.58745 5.33934L8.37478 1.55194C8.46245 1.46434 8.51074 1.34741 8.51074 1.22272C8.51074 1.09804 8.46245 0.981104 8.37478 0.893506L8.09593 0.61459C7.91423 0.433098 7.61892 0.433098 7.43749 0.61459L4.25712 3.79496L1.07322 0.611061C0.985558 0.523463 0.868691 0.475097 0.744075 0.475097C0.61932 0.475097 0.502454 0.523463 0.414718 0.611061L0.135941 0.889976C0.0482731 0.977643 -2.29153e-05 1.09451 -2.29207e-05 1.2192C-2.29262e-05 1.34388 0.048273 1.46082 0.135941 1.54841L3.92673 5.33934C4.01467 5.42715 4.13209 5.47537 4.25692 5.4751C4.38222 5.47537 4.49957 5.42715 4.58745 5.33934Z" fill="#202124"/>
</svg>
              </div>
              <div className="web-option">
              <a href='#courses'>Courses</a>
                  <svg
                          width="20"
                          height="15"
                          viewBox="0 0 9 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/
                          svg"
                      className='option-icon'>
<path d="M4.58745 5.33934L8.37478 1.55194C8.46245 1.46434 8.51074 1.34741 8.51074 1.22272C8.51074 1.09804 8.46245 0.981104 8.37478 0.893506L8.09593 0.61459C7.91423 0.433098 7.61892 0.433098 7.43749 0.61459L4.25712 3.79496L1.07322 0.611061C0.985558 0.523463 0.868691 0.475097 0.744075 0.475097C0.61932 0.475097 0.502454 0.523463 0.414718 0.611061L0.135941 0.889976C0.0482731 0.977643 -2.29153e-05 1.09451 -2.29207e-05 1.2192C-2.29262e-05 1.34388 0.048273 1.46082 0.135941 1.54841L3.92673 5.33934C4.01467 5.42715 4.13209 5.47537 4.25692 5.4751C4.38222 5.47537 4.49957 5.42715 4.58745 5.33934Z" fill="#202124"/>
</svg>
              </div>
              <div className="web-option">
              <a href='#events'>Events</a>
                <svg
                          width="20"
                          height="15"
                          viewBox="0 0 9 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/
                          svg"
                      className='option-icon'>
<path d="M4.58745 5.33934L8.37478 1.55194C8.46245 1.46434 8.51074 1.34741 8.51074 1.22272C8.51074 1.09804 8.46245 0.981104 8.37478 0.893506L8.09593 0.61459C7.91423 0.433098 7.61892 0.433098 7.43749 0.61459L4.25712 3.79496L1.07322 0.611061C0.985558 0.523463 0.868691 0.475097 0.744075 0.475097C0.61932 0.475097 0.502454 0.523463 0.414718 0.611061L0.135941 0.889976C0.0482731 0.977643 -2.29153e-05 1.09451 -2.29207e-05 1.2192C-2.29262e-05 1.34388 0.048273 1.46082 0.135941 1.54841L3.92673 5.33934C4.01467 5.42715 4.13209 5.47537 4.25692 5.4751C4.38222 5.47537 4.49957 5.42715 4.58745 5.33934Z" fill="#202124"/>
</svg>
              </div>
              <div className="web-option">
              <a href='#blog'>Blog</a>
                  <svg
                          width="20"
                          height="15"
                          viewBox="0 0 9 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/
                          svg"
                      className='option-icon'>
<path d="M4.58745 5.33934L8.37478 1.55194C8.46245 1.46434 8.51074 1.34741 8.51074 1.22272C8.51074 1.09804 8.46245 0.981104 8.37478 0.893506L8.09593 0.61459C7.91423 0.433098 7.61892 0.433098 7.43749 0.61459L4.25712 3.79496L1.07322 0.611061C0.985558 0.523463 0.868691 0.475097 0.744075 0.475097C0.61932 0.475097 0.502454 0.523463 0.414718 0.611061L0.135941 0.889976C0.0482731 0.977643 -2.29153e-05 1.09451 -2.29207e-05 1.2192C-2.29262e-05 1.34388 0.048273 1.46082 0.135941 1.54841L3.92673 5.33934C4.01467 5.42715 4.13209 5.47537 4.25692 5.4751C4.38222 5.47537 4.49957 5.42715 4.58745 5.33934Z" fill="#202124"/>
</svg>
              </div>
              <div className="web-option">
              <a href='#pages'>Pages</a>
                  <svg
                          width="20"
                          height="15"
                          viewBox="0 0 9 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/
                          svg"
                      className='option-icon'>
<path d="M4.58745 5.33934L8.37478 1.55194C8.46245 1.46434 8.51074 1.34741 8.51074 1.22272C8.51074 1.09804 8.46245 0.981104 8.37478 0.893506L8.09593 0.61459C7.91423 0.433098 7.61892 0.433098 7.43749 0.61459L4.25712 3.79496L1.07322 0.611061C0.985558 0.523463 0.868691 0.475097 0.744075 0.475097C0.61932 0.475097 0.502454 0.523463 0.414718 0.611061L0.135941 0.889976C0.0482731 0.977643 -2.29153e-05 1.09451 -2.29207e-05 1.2192C-2.29262e-05 1.34388 0.048273 1.46082 0.135941 1.54841L3.92673 5.33934C4.01467 5.42715 4.13209 5.47537 4.25692 5.4751C4.38222 5.47537 4.49957 5.42715 4.58745 5.33934Z" fill="#202124"/>
</svg>
              </div>
              <div className="web-option">
              <a href='#contact'>Contact</a>
                  
                  </div>
          </div>
          <div className="cart">
        <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='cart-icon'>
<path d="M17.2196 20.502C18.0104 20.502 18.7719 20.1652 19.2991 19.5721C19.8263 18.979 20.0753 18.1882 19.9801 17.4047L18.2594 2.46024C18.0983 1.06171 16.9121 0 15.4989 0H4.50107C3.0879 0 1.90171 1.06171 1.74063 2.46024L0.0199243 17.4047C-0.0752635 18.1882 0.173689 18.979 0.700883 19.5721C1.22808 20.1652 1.98958 20.502 2.78037 20.502H17.2196ZM1.46971 17.5731L3.19773 2.62865C3.27095 1.96233 3.83476 1.46443 4.50107 1.46443H15.4989C16.1652 1.46443 16.729 1.96233 16.8023 2.62865L18.5303 17.5731C18.5742 17.9466 18.4571 18.3127 18.2008 18.5982C17.9518 18.8838 17.6004 19.0376 17.2196 19.0376H2.78037C2.39962 19.0376 2.04816 18.8838 1.7992 18.5982C1.54293 18.3127 1.42578 17.9466 1.46971 17.5731V17.5731Z" fill="#1A064F"/>
<path d="M9.99997 8.78642C12.4226 8.78642 14.3933 6.81574 14.3933 4.39314V3.66092C14.3933 3.2566 14.0654 2.92871 13.661 2.92871C13.2567 2.92871 12.9288 3.2566 12.9288 3.66092V4.39314C12.9288 6.00811 11.6149 7.32199 9.99997 7.32199C8.385 7.32199 7.07112 6.00811 7.07112 4.39314V3.66092C7.07112 3.2566 6.74323 2.92871 6.3389 2.92871C5.93457 2.92871 5.60669 3.2566 5.60669 3.66092V4.39314C5.60669 6.81574 7.57737 8.78642 9.99997 8.78642Z" fill="#1A064F"/>
</svg>
          </div>
          <div className="btn">
              <button className='login'>Log in</button>
              <button className='sign-up'>Sign up</button>
          </div>
    </div>
  )
}

export default Nav;