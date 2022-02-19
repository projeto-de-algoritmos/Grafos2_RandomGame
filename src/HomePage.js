import React, {useState, useEffect} from 'react';
import './App.css';
import PlayButton from './Components/PlayButton';
import ActualLocation from './Components/ActualLocation';
import { BackgroundContainer } from './Style';
import Mapa from './Images/Mapa/mapa.png';

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
        <img
          src={Mapa}
          alt="Mapa do jogo"
          style={{
            width: '40%',
          }}
        />
        <PlayButton onClick={() => { setHomePage(false) }}></PlayButton>
      </BackgroundContainer> :
      <div><ActualLocation location="Cathedral"></ActualLocation></div>
      }
    </div>
  );
}

export default HomePage;
