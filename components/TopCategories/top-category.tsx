import Image from 'next/image';
import React from 'react'

const TopCategory = () => {
  return (
    <div className='category-container'>
      <label>Top courses</label>
      <div className="category-content">
        <p>10,000+ unique online course list designs</p>
        <button>All Courses <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8335 2.9165L4.16683 14.5832" stroke="#6440FB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8335 11.4748V2.9165H7.27516" stroke="#6440FB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button> 
      </div>
      <div className='category-courses'>
        <div className='courses-option '>
          <Image src={require("../../assets/courses.png")} alt="course" />
          <div className='courses-dec'>
            <p className='tag'>Digital Marketing</p>
            <p className='tag-name'>573+ Courses</p>
          </div>
        </div>
        <div className='courses-option '>
          <Image src={require("../../assets/courses.png")} alt="course" />
          <div className='courses-dec'>
            <p className='tag'>Web Development</p>
            <p className='tag-name'>573+ Courses</p>
          </div>
        </div>
        <div className='courses-option '>
          <Image src={require("../../assets/courses.png")} alt="course" />
          <div className='courses-dec'>
            <p className='tag'>Graphic Design</p>
            <p className='tag-name'>573+ Courses</p>
          </div>
        </div>
        <div className='courses-option '>
          <Image src={require("../../assets/courses.png")} alt="course" />
          <div className='courses-dec'>
            <p className='tag'>Social Sciences</p>
            <p className='tag-name'>573+ Courses</p>
          </div>
        </div>
        <div className='courses-option '>
          <Image src={require("../../assets/courses.png")} alt="course" />
          <div className='courses-dec'>
            <p className='tag'>Photography</p>
            <p className='tag-name'>573+ Courses</p >
          </div>
        </div>
        <div className='courses-option '>
          <Image src={require("../../assets/courses.png")} alt="course" />
          <div className='courses-dec'>
            <p className='tag'>Art & Humanities</p>
            <p className='tag-name'>573+ Courses</p>
          </div>
        </div>
        <div className='courses-option '>
          <Image src={require("../../assets/courses.png")} alt="course" />
          <div className='courses-dec'>
            <p className='tag'>Personal Development</p>
            <p className='tag-name'>573+ Courses</p>
          </div>
        </div>
        <div className='courses-option '>
          <Image src={require("../../assets/courses.png")} alt="course" />
          <div className='courses-dec'>
            <p className='tag'>It And Software</p>
            <p className='tag-name'>573+ Courses</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCategory;