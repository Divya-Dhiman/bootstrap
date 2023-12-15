import React from 'react'
import Banner1 from '../Banner1.jpg';
import Banner2 from '../Banner3.jpg';
import Banner3 from '../Banner4.jpg';

function Position() {
  return (
    <div>
       {/* position start */}
         <section class="py-lg-9 py-5">
            <div class="container">
               <div class="row align-items-center g-5">
                  <div class="col-xl-4 col-md-6 col-12">
                     <small class="text-uppercase ls-md fw-semibold">Careers / all open positions</small>
                     <h2 class="h1 my-3">Become one of us</h2>
                     <p class="mb-6 pe-lg-4">Do you want to join our team and work remotely from anywhere you’d like? We can’t wait to hear from you!</p>
                     <a href="#!" class="btn btn-primary">View open positions</a>
                  </div>
                  <div class="col-xl-6 offset-xl-2 col-md-6 col-12">
                     <div class="row g-4">
                        <div class="col-lg-6 col-md-6 col-12">
                           <a href="#!">
                              <div class="mb-4 rounded-3 card-lift" style={{backgroundImage: `url(${Banner1})`,
                               backgroundRepeat: 'no-repeat',
                              height: '180px', 
                              backgroundSize: 'cover',
                              }}></div>
                           </a>
                           <a href="#!">
                              <div class="rounded-3 card-lift" style={{backgroundImage: `url(${Banner2})`, 
                              backgroundRepeat: 'no-repeat', 
                              height: '180px', 
                              backgroundSize: 'cover'}}></div>
                           </a>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                           <a href="#!">
                              <div class="rounded-3 card-lift" style={{backgroundImage: `url(${Banner3})` ,
                              backgroundRepeat: 'no-repeat' ,
                              height: '386px',
                               backgroundSize: "cover"}}></div>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* postion end */}
    </div>
  )
}

export default Position
