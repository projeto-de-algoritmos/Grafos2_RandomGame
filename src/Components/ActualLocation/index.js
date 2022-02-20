import React, { useState, useEffect } from 'react';
import Cathedral from '../../Images/Cathedral/Cathedral.png';
import Choras from '../../Images/Choras/Choras.png';
import CursedWoods from '../../Images/CursedWoods/CursedWoods.png';
import DenadoroMtns from '../../Images/DenadoroMtns/DenadoroMtns.png';
import Dorino from '../../Images/Dorino/Dorino.png';
import FionasVilla from '../../Images/FionasVilla/FionasVilla.png';
import GiantsClaw from '../../Images/GiantsClaw/GiantsClaw.png';
import GuardiaForest from '../../Images/GuardiaForest/GuardiaForest.png';
import GuardiaCastle from '../../Images/GuardiaCastle/GuardiaCastle.png';
import MagicCave from '../../Images/MagicCave/MagicCave.png';
import MagicCave2 from '../../Images/MagicCave2/MagicCave2.png';
import MagusLair from '../../Images/MagusLair/MagusLair.png';
import NorthernRuins from '../../Images/NorthernRuins/NorthernRuins.png';
import OzziesFort from '../../Images/OzziesFort/OzziesFort.png';
import Porre from '../../Images/Porre/Porre.png';
import SunKeep from '../../Images/SunKeep/SunKeep.png';
import SunkenDesert from '../../Images/SunkenDesert/SunkenDesert.png';
import Truce from '../../Images/Truce/Truce.png';
import TruceCanyon from '../../Images/TruceCanyon/TruceCanyon.png';
import ZenanBridge from '../../Images/ZenanBridge/ZenanBridge.png';
import { ActualLocationContainer, ButtonRestart, ArestaDiv, ArestaContainer } from './Style'


const ActualLocation = ({
    onClickToHome, solution, arestas, score, setScore
}) => {
  const [teste2, setTeste2] = useState(true);
  const [location, setLocation] = useState("Sun Keep");
  let imageLocation = "";

  var arestasLocation = [];

  const adicionaArestas = () => {
    arestasLocation = [];
    for(let i = 0; i < arestas.length; i++){
      if(arestas[i][0] === location){
        arestasLocation.push(arestas[i])
        // console.log(arestas[i]);
      }
      // console.log('falhou');
    }
  }

  adicionaArestas();


  // console.log(arestas.length);
  // console.log(arestas);
  // console.log(arestas);

  useEffect(() => {
    adicionaArestas();
    console.log(location);
    console.log(score);
  }, [location]);

  switch (location) {
    case 'Cathedral':
      imageLocation = Cathedral;
      break;
    case 'Choras':
      imageLocation = Choras;
      break;
    case 'Cursed Woods':
      imageLocation = CursedWoods;
      break;
    case 'Denadoro Mtns':
      imageLocation = DenadoroMtns;
      break;
    case 'Dorino':
      imageLocation = Dorino;
      break;
    case 'Fionas Villa':
      imageLocation = FionasVilla;
      break;
    case 'Giants Claw':
      imageLocation = GiantsClaw;
      break;
    case 'Guardia Forest':
      imageLocation = GuardiaForest;
      break;
    case 'Guardia Castle':
      imageLocation = GuardiaCastle;
      break;
    case 'Magic Cave 1':
      imageLocation = MagicCave;
      break;
    case 'Magic Cave 2':
      imageLocation = MagicCave2;
      break;
    case 'Magus Lair':
      imageLocation = MagusLair;
      break;
    case 'Northern Ruins':
      imageLocation = NorthernRuins;
      break;
    case 'Ozzies Fort':
      imageLocation = OzziesFort;
      break;
    case 'Porre':
      imageLocation = Porre;
      break;
    case 'Sun Keep':
      imageLocation = SunKeep;
      break;
    case 'Sunken Desert':
      imageLocation = SunkenDesert;
      break;
    case 'Truce':
      imageLocation = Truce;
      break;
    case 'Truce Canyon':
      imageLocation = TruceCanyon;
      break;
    case 'Zenan Bridge':
      imageLocation = ZenanBridge;
      break;
    default:
      imageLocation = ""
  };

  const [teste, setTeste] = useState(false);

  return (
    <ActualLocationContainer>
      <img
        src={imageLocation}
        alt="Mapa do jogo"
        style={{
          width: '40%',
          height: '50%',
        }}
      />
      <ArestaContainer>
        { arestasLocation.map((aresta) => (
          <ArestaDiv onClick={() => { setScore((score+aresta[2])); setLocation(aresta[1])}}>
            <p>
              {aresta[0]} --> {aresta[1]}
            </p>
          </ArestaDiv>
        ))
        }
      </ArestaContainer>
      <ButtonRestart onClick={onClickToHome}>Recomeçar</ButtonRestart>
    </ActualLocationContainer>
  );
};
   
  export default ActualLocation;