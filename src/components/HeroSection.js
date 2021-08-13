import React from 'react';
import '../App.css';
import { ButtonSubscribe } from './ButtonSubsrcibe';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/nightDrive.mp4' autoPlay loop muted />
      {/* <img style={{objectFit: 'cover',
      //  opacity: '0.2',
       height: '75%',
       width: "40%",
       position: 'fixed',
       zIndex: '-1'}} 
       src="/images/SanDiegoPotato.jpg"/> */}
      <div className='hero-btns'>
        <ButtonSubscribe
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ABOUT
        </ButtonSubscribe>
        <ButtonSubscribe
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          EXPERIENCE <i className='far fa-play-circle' />
        </ButtonSubscribe>
      </div>
    </div>
  );
}

export default HeroSection;
