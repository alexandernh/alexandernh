import React from 'react';
import './entry1.css';
// import CardItem from '../CardItem';

function Entry1() {
  return (
    <div className='entry'>
      <div className='entry__container'>
        <div className='entry__wrapper'>
          <div className='row'>
              <div className='column1' style={{paddingRight: '5%'}}>
                <img style={{ width:"100%", height: '100%'}} src="/images/alexprofile.jpg"/>
              </div>
              <div className='column'>
                <h1>I'm Alex and I enjoy climbing, playing soccer, throwing plastic discs (ultimate frisbee).</h1>
                <h3>It is a vlong established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h3>
              </div>
          </div>
            <div className='row1'>

              <div className='column' style={{paddingRight: '5%'}}>
                <h1>I also take mediocre photos.</h1>
                <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </h3>
              </div>
              <div className='column1'>
                <img style={{ width:"100%", height: '100%'}} src="/images/computer.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Entry1;
