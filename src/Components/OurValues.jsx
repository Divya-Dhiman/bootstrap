import React from 'react'
import value1 from '../value1.jpg';
import value2 from '../value2.jpg';
import value3 from '../value3.jpg';

function OurValues() {
  return (
  <>
  <div className='container'>
      <div className='row'>
          <div className='col-lg-12 col-md-12 col-12'>
            <div className='mb-xl-6 mb-5'>
              <h2 className='mb-0'>Our values</h2>
            </div>
          </div>
        </div>
        <div className='row d-flex aligin-items-center mb-md-9 mb-6'>
          <div className='col-lg-6 col-md-6 col-12'>
            <figure className='mb-4 mb-md-0'>
              <img src={value1} alt='value1' className='img-fluid rounded-3'>
              </img>
            </figure>
          </div>
          <div className='col-lg-5 offset-lg-1 col-md-6 col-12' >
            <span className='text-primary fw-semibold'>01
            </span>
            <div className='mb-4'>
              <h3 className='mt-4 mb-3'>create Brands</h3>
              <p className='mb-0'>We create brands, interactions, communications, and a wide variety of design daily. It is not only a work routine but also our way of fulfilling seemingly impossible tasks.</p>
            </div>
            <a href="#!" className="icon-link icon-link-hover">Explore service</a>
          </div>
        </div>


        <div className="row d-flex align-items-center mb-md-9 mb-6">
                  <div className="col-lg-5 col-md-6 col-12 order-2">
                     <span className="text-primary fw-semibold">02</span>
                     <div className="mb-4">
                        <h3 className="mt-4 mb-3">Care Deeply</h3>
                        <p className="mb-0">
                           We care deeply about achieving our clients’ business goals. Our inner processes are built around contributing to these goals. Because every personality impacts the final
                           product, we cherish and consider all viewpoints.
                        </p>
                     </div>
                     <a href="#!" className="icon-link icon-link-hover">
                        Case study
                     </a>
                  </div>

                  <div className="col-lg-6 offset-lg-1 col-md-6 col-12 order-md-2">
                     <figure className="mb-4">
                        <img src={value2} alt="value2" className="img-fluid rounded-3"></img>
                     </figure>
                  </div>
               </div>
               <div className="row d-flex align-items-center mb-md-9 mb-6">
                  <div className="col-lg-6 col-md-6 col-12">
                     <figure className="mb-4 mb-md-0">
                        <img src={value3} alt="value3" className="img-fluid rounded-3"></img>
                     </figure>
                  </div>
                  <div className="col-lg-5 offset-lg-1 col-md-6 col-12">
                     <span className="text-primary fw-semibold">03</span>
                     <div className="mb-4">
                        <h3 className="mt-4 mb-3">Growth Together</h3>
                        <p className="mb-0">We continue to transform and experiment with methodologies and approaches. But one thing remains unchangeable — the direction of our growth.</p>
                     </div>

                     <a href="#!" className="icon-link icon-link-hover">
                        Join our team
                     </a>
                  </div>
               </div>
      </div>
    
    </>
  )
}

export default OurValues