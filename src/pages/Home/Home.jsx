import React from 'react';
import { Slide } from 'react-slideshow-image';
import starsBg from '../../assets/starsBg.png';
import firstSliderImage from '../../assets/firstSliderImage.jpeg';
import secondSliderImage from '../../assets/secondSliderImage.jpeg';
import thirdSliderImage from '../../assets/thirdSliderImage.jpeg';

const divStyle = {
  margin: '0px 5px',
  height: '800px',
};

const slideImages = [
  {
    url: firstSliderImage,
    text: (
      <span>
        <span style={{ display: 'block', color: 'black', fontSize: '7rem', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'gold' }}>JOIN</span>
        the dark side of the force
      </span>
    ),
  },
  {
    url: secondSliderImage,
    text: (
      <span>
        <span style={{ display: 'block', color: 'black', fontSize: '7rem', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'gold' }}>IMMERSE</span>
        yourself in the galaxy
      </span>
    ),
  },
  {
    url: thirdSliderImage,
    text: (
      <span>
        <span style={{ display: 'block', color: 'black', fontSize: '7rem', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'gold' }}>LOG IN</span>
        and display your potential
      </span>
    ),
  },
];

function Home()  {
  return (
    <>
      <div className="slide-container" style={{backgroundImage: `url(${starsBg})`, backgroundSize: 'cover'}}>
        <Slide transitionDuration={1700}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                  backgroundPosition: 'right',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                }}
              >
                <div
                  className="wrapper"
                  style={{
                    padding: '10rem',
                    width: '600px',
                    height: '400px',
                    marginTop: '1rem',
                    border: '3px',
                    borderRadius: '20px',
                    boxShadow: '0px 10px 10px 0px gold',
                    backdropFilter: 'blur(5px)',
                  }}
                >
                  <span
                    style={{
                      color: 'white',
                      fontSize: '5rem',
                      fontWeight: '800',
                      margin: '0 auto',
                      WebkitTextStrokeWidth: '1px',
                      WebkitTextStrokeColor: 'gold',
                    }}
                  >
                    {slideImage.text}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default Home;
