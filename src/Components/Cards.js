import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Welcome To My Profile</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/profile-pic.jpg'
              text='Hi, I am Abhishek Pundir and learning Full Stack Development from BCIT, Vancouver, CA.
               Through this course, I will be learning to create the Web Applications and Mobile Applications. This course will be going to help me with the strong foundations of languages and technologies used to built a fully functional website. '
              label='Profile'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;