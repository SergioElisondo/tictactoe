import logo from './logo.svg';
import React from 'react';
import './App.css';
import Game from './components/Game';



function App() {
  return ( 
    <div
      style={{
        backgroundImage: 'url("https://preview.redd.it/7jsccbavgs671.gif?width=1000&auto=webp&s=624eda20d8507c284555a62433bb3cec489e4acb")',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh'
      }}
    >
       <Game />
    </div>
  )
}

// diff backgrounds
// https://preview.redd.it/7jsccbavgs671.gif?width=1000&auto=webp&s=624eda20d8507c284555a62433bb3cec489e4acb   city shot
// https://cdnb.artstation.com/p/assets/images/images/026/128/253/original/lennart-butz-idea5anim5.gif?1587962321 japanese lake view


export default App;

// first, remove EVERYTHING in return method