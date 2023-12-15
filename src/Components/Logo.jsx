import React from 'react'
import logo1 from '../logo1.svg';
import logo2 from '../logo2.svg';
import logo3 from '../logo3.svg';

function Logo() {
  return (
    <div>
      <section className='my-lg-9 my-5'>
      <div className='container'>
        <div className='row border-top border-bottom'>
          <div className='col-lg-4 col-md-4 col-12 border-end-md border-bottom border-bottom-md-0'>
            <div className='text-center p-5'>
              <img src={logo1} alt='logo1' className=''></img>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-12 border-end-md border-bottom border-bottom-md-0'>
            <div className='text-center p-5'>
              <img src={logo2} alt='logo2' className=''></img>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-12' >
            <div className='text-center p-5'>
              <img src={logo3} alt='logo3' className=''></img>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Logo
