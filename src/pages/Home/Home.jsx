import React from 'react';
import Slider from '../../components/Slider/Slider';
import firstSliderImage from '../../assets/firstSliderImage.jpeg';
import secondSliderImage from '../../assets/secondSliderImage.jpeg';
import thirdSliderImage from '../../assets/thirdSliderImage.jpeg';

const Home = () => {
  const slideImages = [
    {
      url: firstSliderImage,
      text: (
        <span>
          <span style={{ display: 'block', color: 'black', fontSize: '7rem', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'gold' }}>
          JOIN
          </span>
          the dark side of the force
        </span>
      ),
    },
    {
      url: secondSliderImage,
      text: (
        <span>
          <span style={{ display: 'block', color: 'black', fontSize: '7rem', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'gold' }}>
          IMMERSE
          </span>
          yourself in the galaxy
        </span>
      ),
    },
    {
      url: thirdSliderImage,
      text: (
        <span>
          <span style={{ display: 'block', color: 'black', fontSize: '7rem', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'gold' }}>
          LOG IN
          </span>
          and display your potential
        </span>
      ),
    },
  ];

  return (
    <>
      <Slider slideImages={slideImages} />
    </>
  );
};

export default Home;
