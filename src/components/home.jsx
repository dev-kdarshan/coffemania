import React from 'react';
import "../styles/home.css";  
import About from './about';
import Dropdown from './dropdown';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-holder">
      <div className="home-container">
        <div className="home-content-holder">
          <div className="home-content">
            <div className="content-head">
              <h1 className='content-title'>Start Your Mornings Right</h1>
              <p className='content-subtitle'>Wake up to rich aromas and comforting flavors — coffee that feels like home.</p>
            </div>
            <div className="content-foot">
              <Link to="/shop" className='shop-text'>Fill the basket now</Link>
              <i className="bi bi-basket3-fill"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="alsoOn">
        <img src="src/assets/alsoon.png" alt="as seen us on" />
      </div>
      <About />
      <Dropdown />
    </div>
  );
}

export default Home;
