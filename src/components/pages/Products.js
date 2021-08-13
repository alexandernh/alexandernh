import React from 'react';
import '../../App.css';
import Footer from '../Footer';

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
      <h1 style={{color: 'white'}}>RESUME</h1>
    </div>
    <Footer/>
  </div>
  );
}
