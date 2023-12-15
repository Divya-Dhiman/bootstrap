import React from 'react';
import logo1 from '../logo1.svg';
import logo2 from '../logo2.svg';
import logo3 from '../logo3.svg';

const Logo = () => {
  return (
    <div>
      <section className='my-lg-9 my-5'>
        <div className='container'>
          <div className='row border-top border-bottom'>
            <Logos src={logo1} alt='logo1' />
            <Logos src={logo2} alt='logo2' />
            <Logos src={logo3} alt='logo3' />
          </div>
        </div>
      </section>
    </div>
  );
};

const Logos = ({ src, alt }) => {
  return (
    <div className='col-lg-4 col-md-4 col-12 border-end-md border-bottom border-bottom-md-0'>
      <div className='text-center p-5'>
        <img src={src} alt={alt} className='' />
      </div>
    </div>
  );
};

export default Logo;
