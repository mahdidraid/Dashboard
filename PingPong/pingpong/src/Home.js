import React from 'react';
import './css/home.css'; // Assuming you have a CSS file for styling

export default function Home() {
  return (
    <div>
      {/* start header */}
      <header>
        <div className="container">
          <div className="main-nav">
            <a href="#" className="logo">Logo</a>
            <a href="singin" className="sing-btn-header">Sign in</a>
          </div>
        </div>
      </header>
      {/* end header */}
      
      {/* start landing */}
      <div className="landing">
        <div className="container">
          <div className="info">
            <h2 className="info">ping pong <span>Game</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem magnam vitae placeat animi, maxime atque autem dolor laborum suscipit doloribus, iusto asperiores debitis sunt expedita nostrum obcaecati ab quia?</p>
            <div className="buttons">
              <a href="#" className="info-btn">More Info</a>
              <a href="#" className="info-btn">Start game</a>
            </div>
          </div>
          <div className="imge">
            <img src={require('./imgs/landing.jpg')} alt="" />
          </div>
        </div>
      </div>
      {/* end landing */}
    </div>
  );
}
