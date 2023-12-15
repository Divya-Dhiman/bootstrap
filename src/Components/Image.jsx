import React from 'react';
import './Pattern.css';
import image1 from '../image1.jpg';
import image2 from '../image-2.jpg';
import image3 from '../image-3.jpg';

const Image = () => {
  return (
    <>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-4 col-12">
              <a href={image1} className="glightbox rounded-3">
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
              <a href={image2} className="glightbox rounded-3">
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
              <a href={image3} className="glightbox rounded-3">
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
    </>
  );
};

export default Image;
