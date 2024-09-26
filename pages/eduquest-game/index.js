import React from 'react';
import { AnimatedBg, GameLink, LogoIcon } from '../../components';
// import logo from '../../assets/icons/logo.svg'

function HomePage() {
  return (
      <div className="home-page">
        <AnimatedBg />
        <div className="content">
          {/* <LogoIcon /> */}
          {/* <img className="logo" src={logo} alt="EDUQUEST" /> */}
          <img className="logo" src="/title.png" alt="EDUQUEST" height={100} />
          <h1>Ready to start your quest?</h1>
          <p>Dive into a world of fun and learning! Our educational games are designed to spark curiosity, boost creativity, and make learning an exciting adventure. Whether you're solving puzzles, exploring new concepts, or challenging your skills, there's something here for every young mind.</p>
          <nav>
            <ul>
              <li>
                <GameLink text="Play Number Crunching Game" path="/eduquest-game/MathPage" />
              </li>
              <li>
                <GameLink text="Play Word Scramble Challenge" path="/eduquest-game/WordScramblePage" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
  );
}

export default HomePage;