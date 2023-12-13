import React from 'react';
import blog from './blog.svg';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expend-lg navbar-light w-100 navbar-clone fixed navbar-unstick">
        <div className='cantainer px-3'>
            <a className='navbar-brand' href='./index.html'>
                <img src={blog} alt='blog'/>
            </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
