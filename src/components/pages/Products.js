import React from 'react';
import '../../App.css';
import Entry3 from '../entries/entry3';
import Footer from '../Footer';
import { ButtonSubscribe } from '../ButtonSubsrcibe';
import HeroSection from '../HeroSection';
import { Button } from '../Button';

function componentDidMount() {
  window.scrollTo(0, 0)
}

export default function Products() {
  componentDidMount();
  return (
  <div>
    <div className='services-container'>
      <img style={{objectFit: 'cover',
      //  opacity: '0.2',
       height: '75%',
       width: "40%",
       position: 'fixed',
       zIndex: '-1'}} 
       src="/images/Prod.jpg"/>
      <div className='hero-btns'>
      <a href="/images/alex.jpg" download="AlexHoResume">
        {/* <ButtonSubscribe
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          RESUME
        </ButtonSubscribe> */}
        <button>Resume</button>
        </a>
      </div>    
    </div>
  </div>
  );
}
