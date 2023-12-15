
import React from 'react';
import './Pattern.css';
import image1 from '../image1.jpg';
import image2 from '../image-2.jpg'; 
import image3 from '../image-3.jpg';

function Image() {
  return (
    <>



{/* image start */}
       <section className="">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-4 col-12">
            <a href="../image1.jpg" className="glightbox rounded-3">
              <div
                className="rounded-3 card-lift"
                style={{
                  backgroundImage: `url(${image1})`,
                  backgroundRepeat: 'no-repeat',
                  height: '350px',
                  backgroundSize: 'cover',
                }}
              ></div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <a href="../image-2.jpg" className="glightbox rounded-3">
              <div
                className="rounded-3 card-lift"
                style={{
                  backgroundImage: `url(${image2})`,
                  backgroundRepeat: 'no-repeat',
                  height: '350px',
                  backgroundSize: 'cover',
                }}
              ></div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <a href="../image-3.jpg" className="glightbox rounded-3">
              <div
                className="rounded-3 card-lift"
                style={{
                  backgroundImage: `url(${image3})`,
                  backgroundRepeat: 'no-repeat',
                  height: '350px',
                  backgroundSize: 'cover',
                }}
              ></div>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* image end */}

    </>
  )}
  export default Image