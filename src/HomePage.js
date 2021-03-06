import React, {useState, useEffect} from 'react';
import './App.css';
import PlayButton from './Components/PlayButton';
import ActualLocation from './Components/ActualLocation';
import { BackgroundContainer, TextHomePage, SubTextHomePage } from './Style';
import Mapa from './Images/Mapa/mapa.png';
import solve from './graph';

function HomePage () {
  var [homePage, setHomePage] = useState(true);
  const [save, setSave] = useState([]);
  const [score, setScore] = useState(0);

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
        <PlayButton onClick={() => { setHomePage(false); setSave(solve()); }}></PlayButton>
      </BackgroundContainer> :
      <div>
        <ActualLocation
          onClickToHome={() => { setHomePage(true); setScore(0)}}
          solution={save[0]}
          arestas={save[1]}
          score={score}
          setScore={setScore}
          ></ActualLocation></div>
      }
    </div>
  );
}

export default HomePage;
