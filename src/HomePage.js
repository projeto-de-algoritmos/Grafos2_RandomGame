import React, {useState, useEffect} from 'react';
import './App.css';
import PlayButton from './Components/PlayButton';
import ActualLocation from './Components/ActualLocation';
import { BackgroundContainer, TextHomePage, SubTextHomePage } from './Style';
import Mapa from './Images/Mapa/mapa.png';

function HomePage () {
  var [homePage, setHomePage] = useState(true);

  useEffect(() => {
  },[homePage])

  return (
    <div>
      { homePage ?
      <BackgroundContainer>
      <TextHomePage>Seja bem vindo ao Random Game!</TextHomePage>
      <SubTextHomePage>Encontre o menor caminho para chegar no destino final.</SubTextHomePage>
        <img
          src={Mapa}
          alt="Mapa do jogo"
          style={{
            width: '40%',
            height: '38%',
            padding: '2%'
          }}
        />
        <PlayButton onClick={() => { setHomePage(false) }}></PlayButton>
      </BackgroundContainer> :
      <div><ActualLocation location="Cathedral" onClickToHome={() => { setHomePage(true) }}></ActualLocation></div>
      }
    </div>
  );
}

export default HomePage;
