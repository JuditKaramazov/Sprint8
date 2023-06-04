import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundContainer, AboutWrapper, AboutTextContainer, StyledAboutBtn } from './About.styled';
import aboutImg from '../../assets/aboutImg.png';

function About() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <>
      <BackgroundContainer>
        <AboutWrapper>
          <div className="about-title">
            <span style={{ display: 'block', color: 'black', fontSize: '6rem', textAlign: 'center', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'gold' }}>
              ABOUT THE SITE
            </span>
          </div>
          <div className="about-img">
            <img src={aboutImg} alt="Distinctive Star Wars character" />
          </div>
          <AboutTextContainer>
            <p>Are you a huge Star Wars fan? I'm truly glad you're here, then!
              <br />
              I must admit, much to everyone's disappointment, that I'm not.
              <br />
              However, there's this one person who truly loves the franchise:
              <br />
              <span>Kernelkun</span>.
              <br />
              You've always been there; during the good and bad moments, supporting,
              <br />
              encouraging, and giving me an entirely new perspective on things
              <br />
              I couldn't even suspect they existed.
              <br />
              <span>Thank you - for everything.</span>
              <br/>
              And as for you, little Padawan visiting this site... thank you for your presence, too!
            </p>
          </AboutTextContainer>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <StyledAboutBtn onClick={handleGoBack}>FLY ME BACK (HOME)</StyledAboutBtn>
          </div>
        </AboutWrapper>
      </BackgroundContainer>
    </>
  )
}

export default About;
