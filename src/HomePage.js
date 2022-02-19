import React, {useState, useEffect} from 'react';
import './App.css';
import PlayButton from './Components/PlayButton';
import ActualLocation from './Components/ActualLocation';
import { BackgroundContainer } from './Style';

function HomePage () {
  var [homePage, setHomePage] = useState(true);

  useEffect(() => {
  },[homePage])

  return (
    <div>
      { homePage ?
      <BackgroundContainer>
      <h1>Seja bem vindo ao Random Game!</h1>
      <h3>Encontre o menor caminho para chegar no destino final.</h3>
        <PlayButton onClick={() => { setHomePage(false) }}></PlayButton>
      </BackgroundContainer> :
      <div><ActualLocation></ActualLocation></div>
      }
    </div>
  );
}

export default HomePage;
