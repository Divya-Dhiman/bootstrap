import React from 'react';
import Banner1 from '../Banner1.jpg';
import Banner2 from '../Banner3.jpg';
import Banner3 from '../Banner4.jpg';

const Position = () => {
  return (
    <div>
      <section className="py-lg-9 py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-xl-4 col-md-6 col-12">
              <small className="text-uppercase ls-md fw-semibold">Careers / all open positions</small>
              <h2 className="h1 my-3">Become one of us</h2>
              <p className="mb-6 pe-lg-4">Do you want to join our team and work remotely from anywhere you'd like? We can't wait to hear from you!</p>
              <a href="#!" className="btn btn-primary">View open positions</a>
            </div>
            <div className="col-xl-6 offset-xl-2 col-md-6 col-12">
              <div className="row g-4">
                <ImageCard  backgroundImage={Banner1} height="180px" />
                <ImageCard  backgroundImage={Banner2} height="180px" />
                <ImageCard  backgroundImage={Banner3} height="386px" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ImageCard = ({  backgroundImage, height }) => (
  <div className="col-lg-6 col-md-6 col-12">
      <div className="mb-4 rounded-3 card-lift" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        height: height,
        backgroundSize: 'cover',
      }}></div>
    
  </div>
);

export default Position;
