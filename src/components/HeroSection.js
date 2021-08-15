import React from 'react';
import '../App.css';
import { ButtonSubscribe } from './ButtonSubsrcibe';
import Entry4 from './entries/entry4';
import './HeroSection.css';

function HeroSection() {
  return (
    <div>
    <div className='hero-container'>
      {/* <video src='/videos/nightDrive.mp4' autoPlay loop muted /> */}
      {/* <img style={{objectFit: 'cover',
      //  opacity: '0.2',
       height: '75%',
       width: "40%",
       position: 'fixed',
       zIndex: '-1'}} 
       src="/images/SanDiegoPotato.jpg"/> */}
             <img style={{objectFit: 'cover',
      //  opacity: '0.2',
              height: '75%',
              width: "40%",
              position: 'fixed',
              zIndex: '-1'}} 
              src="/images/Prod.jpg"/>
      <div style={{  height: '82vh',
          width: '100%'}}>

       </div>
      {/* <div className='hero-btns'>
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
      </div> */}
    </div>
    <div className='hero-container'>
      {/* <video src='/videos/nightDrive.mp4' autoPlay loop muted /> */}
      {/* <img style={{objectFit: 'cover',
      //  opacity: '0.2',
       height: '75%',
       width: "40%",
       position: 'fixed',
       zIndex: '-1'}} 
       src="/images/SanDiegoPotato.jpg"/> */}
             <img style={{objectFit: 'cover',
      //  opacity: '0.2',
              height: '75%',
              width: "40%",
              position: 'inherit',
              zIndex: '-1'}} 
              src="/images/loganBike.jpg"/>
      {/* <div style={{  height: '82vh',
          width: '100%'}}>

       </div> */}
      {/* <div className='hero-btns'>
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
      </div> */}
    </div>
    <div style={{  height: '96vh',
          width: '100%', backgroundColor: 'black'}}>

       </div>
    <div>
        <Entry4/>
       </div>
       <div style={{height: '1500px'}}>

</div>
    </div>
  );
}

export default HeroSection;
