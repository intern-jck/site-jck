import React from 'react';
import './Home.css';

const homeImgUrl = 'https://iili.io/63UZQa.jpg';

const Home = () => {
  return (
    <div className='Home'>
      <section className='home-section'>
        <div className='home-img'>
          <img src={homeImgUrl} />
        </div>
        <h1>Justin Claude Kirk</h1>
        <h2>A maker of many things.</h2>
      </section>
    </div>
  );
};

export default Home;
