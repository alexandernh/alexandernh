import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/loganbike.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/computer.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul> */}
          {/* <ul className='cards__items'>
            <CardItem
              src='images/loganbike.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/computer.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul> */}
          <ul className='cards__items'>
            <CardItem
              src='images/Computer.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='August 28, 2021'
              path='/entry1'
            />
            <CardItem
              src='images/LoganBike.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='September 30, 2020'
              path='/entry2'
            />
            <CardItem
              src='images/SanDiegoPotato.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='October 5, 2020'
              path='/entry3'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
