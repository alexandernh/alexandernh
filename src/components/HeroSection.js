import React from 'react';
import '../App.css';
import { ButtonSubscribe } from './ButtonSubsrcibe';
import Entry4 from './entries/entry4';
import './HeroSection.css';
import $ from 'jquery';


$(window).scroll(function(){
  $("#theFixed").css("top",Math.max(0,850-$(this).scrollTop()));
});

$(window).scroll(function(){
  $("#theFixed2").css("top",Math.max(0,1550-$(this).scrollTop()));
});

$(window).scroll(function(){
  $("#theFixed3").css("top",Math.max(0,2250-$(this).scrollTop()));
});

$(window).scroll(function(){
  $("#theFixed4").css("top",Math.max(0,2950-$(this).scrollTop()));
});

$(window).scroll(function(){
  $("#theFixed5").css("top",Math.max(0,3650-$(this).scrollTop()));
});

$(window).scroll(function(){
  $("#theFixed6").css("top",Math.max(0,4350-$(this).scrollTop()));
});

$(window).scroll(function(){
  $("#theFixed7").css("top",Math.max(0,5050-$(this).scrollTop()));
});

$(window).scroll(function(){
  $("#theFixed8").css("top",Math.max(0,5750-$(this).scrollTop()));
});

$(window).scroll(function(){
  $("#theFixed9").css("top",Math.max(0,6450-$(this).scrollTop()));
});

$(window).scroll(function(){
  $("#theFixed10").css("top",Math.max(0,7150-$(this).scrollTop()));
});

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
    {/* <div> */}
      {/* <video src='/videos/nightDrive.mp4' autoPlay loop muted /> */}
      {/* <img style={{objectFit: 'cover',
      //  opacity: '0.2',
       height: '75%',
       width: "40%",
       position: 'fixed',
       zIndex: '-1'}} 
       src="/images/SanDiegoPotato.jpg"/> */}
      <div className="hero-container1"  id="theFixed" style={{position:'fixed'}}> 
        <img style={{objectFit: 'cover',
          height: '91%',
          width: "40%",
          zIndex: '1', paddingTop: '100px'}} 
        src="/images/loganBike.jpg"/>
      </div>
      <div className="hero-container1"  id="theFixed2" style={{position:'fixed'}}> 
        <img style={{objectFit: 'cover',
          height: '91%',
          width: "40%",
          zIndex: '1', paddingTop: '135px'}} 
        src="/images/alexbanana.jpg"/>
      </div>
      <div className="hero-container1"  id="theFixed3" style={{position:'fixed'}}> 
        <img style={{objectFit: 'cover',
          height: '91%',
          width: "40%",
          zIndex: '1', paddingTop: '170px'}} 
        src="/images/camp.png"/>
      </div>
      <div className="hero-container1"  id="theFixed4" style={{position:'fixed'}}> 
        <img style={{objectFit: 'cover',
          height: '91%',
          width: "40%",
          zIndex: '1', paddingTop: '205px'}} 
        src="/images/coast1.jpg"/>
      </div>
      <div className="hero-container1"  id="theFixed5" style={{position:'fixed'}}> 
        <img style={{objectFit: 'cover',
          height: '91%',
          width: "40%",
          zIndex: '1', paddingTop: '240px'}} 
        src="/images/alex.jpg"/>
      </div>
      <div className="hero-container1"  id="theFixed6" style={{position:'fixed'}}> 
        <img style={{objectFit: 'cover',
          height: '91%',
          width: "40%",
          zIndex: '1', paddingTop: '275px'}} 
        src="/images/alexzion.jpg"/>
      </div>
      <div className="hero-container1"  id="theFixed7" style={{position:'fixed'}}> 
        <img style={{objectFit: 'cover',
          height: '91%',
          width: "40%",
          zIndex: '1', paddingTop: '310px'}} 
        src="/images/computer.jpg"/>
      </div>
      <div className="hero-container1"  id="theFixed8" style={{position:'fixed'}}> 
        <img style={{objectFit: 'cover',
          height: '91%',
          width: "40%",
          zIndex: '1', paddingTop: '345px'}} 
        src="/images/blm.jpg"/>
      </div>
      <div className="hero-container1"  id="theFixed9" style={{position:'fixed'}}> 
        <img style={{objectFit: 'cover',
          height: '91%',
          width: "40%",
          zIndex: '1', paddingTop: '380px'}} 
        src="/images/game.jpg"/>
      </div>
      <div className="hero-container1"  id="theFixed10" style={{position:'fixed'}}> 
        <img style={{objectFit: 'cover',
          height: '91%',
          width: "40%",
          zIndex: '1', paddingTop: '415px'}} 
        src="/images/sandiegopotato.jpg"/>
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
    {/* </div> */}
    {/* <div id="theFixed2" style={{top: '1850px', position: 'fixed'}}>

    <div style={{  height: '72vh', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
      <video src='/videos/nightDrive.mp4' autoPlay loop muted />

       </div>
       </div> */}
    {/* <div>
        <Entry4/>
       </div> */}
       <div style={{height: '8000px'}}>

      </div>
    </div>
  );
}

export default HeroSection;
