import React from 'react';
import './entry1.css';
// import CardItem from '../CardItem';

function Entry2() {
  return (
    <div className='entry'>
      <div className='entry__container'>
        <div className='entry__wrapper'>
          <div className='row' style={{borderBottom: '5px solid grey'}}>
              <div className='column1' style={{paddingRight: '5%'}}>
                <img style={{ width:"100%", height: '100%'}} src="/images/jpmc.jpg"/>
              </div>
              <div className='column'>
                <h1>JPMorgan Chase & Co.</h1>
                <h2>Software Engineer Intern</h2>
                <p>Summer 2021</p>
                <h3 style={{paddingTop: '2%'}}>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</h3>
              </div>
          </div>
          <div className='row' style={{paddingTop: '6%', borderBottom: '5px solid grey'}}>
              <div className='column'>
                <h1>Charles Schwab</h1>
                <h2>Software Engineer Intern</h2>
                <p>Summer 2020</p>
                <h3 style={{paddingTop: '2%'}}>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</h3>
              </div>
              <div className='column1' style={{paddingLeft: '5%', paddingBottom: '5%'}}>
                <img style={{ width:"100%", height: '100%'}} src="/images/cs.png"/>
              </div>
          </div>
          <div className='row' style={{paddingTop: '6%'}}>
              <div className='column1' style={{paddingRight: '5%', paddingTop: '2%'}}>
                <img style={{ width:"100%", height: '100%'}} src="/images/l3.jpg"/>
              </div>
              <div className='column' style={{paddingBottom: '5%'}}>
                <h1>L3Harris</h1>
                <h2>Big Data Engineer Co-Op</h2>
                <p>Summer & Fall 2019</p>
                <h3 style={{paddingTop: '2%'}}>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</h3>
              </div>
          </div>
            <div className='row1'>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Entry2;
