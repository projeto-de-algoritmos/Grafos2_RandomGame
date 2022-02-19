import React from 'react';
import Cathedral from '../../Images/Cathedral/Cathedral.png';
import Choras from '../../Images/Choras/Choras.png';
import CursedWoods from '../../Images/CursedWoods/CursedWoods.png';
import DenadoroMtns from '../../Images/DenadoroMtns/DenadoroMtns.png';
import Dorino from '../../Images/Dorino/Dorino.png';
import FionasVilla from '../../Images/FionasVilla/FionasVilla.png';
import GiantsClaw from '../../Images/GiantsClaw/GiantsClaw.png';
import GuardiaForest from '../../Images/GuardiaForest/GuardiaForest.png';
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
import { ActualLocationContainer } from './Style'


const ActualLocation = ({
    location
}) => {

  let imageLocation = "";

  switch (location) {
    case 'Cathedral':
      imageLocation = Cathedral;
      break;
    case 'Choras':
      imageLocation = Choras;
      break;
    case 'CursedWoods':
      imageLocation = CursedWoods;
      break;
    case 'DenadoroMtns':
      imageLocation = DenadoroMtns;
      break;
    case 'Dorino':
      imageLocation = Dorino;
      break;
    case 'FionasVilla':
      imageLocation = FionasVilla;
      break;
    case 'GiantsClaw':
      imageLocation = GiantsClaw;
      break;
    case 'GuardiaForest':
      imageLocation = GuardiaForest;
      break;
    case 'MagicCave':
      imageLocation = MagicCave;
      break;
    case 'MagicCave2':
      imageLocation = MagicCave2;
      break;
    case 'MagusLair':
      imageLocation = MagusLair;
      break;
    case 'NorthernRuins':
      imageLocation = NorthernRuins;
      break;
    case 'OzziesFort':
      imageLocation = OzziesFort;
      break;
    case 'Porre':
      imageLocation = Porre;
      break;
    case 'SunKeep':
      imageLocation = SunKeep;
      break;
    case 'SunkenDesert':
      imageLocation = SunkenDesert;
      break;
    case 'Truce':
      imageLocation = Truce;
      break;
    case 'TruceCanyon':
      imageLocation = TruceCanyon;
      break;
    case 'ZenanBridge':
      imageLocation = ZenanBridge;
      break;
    default:
      imageLocation = ""
  };
  
  return (
    <ActualLocationContainer>
      <img
        src={imageLocation}
        alt="Mapa do jogo"
        style={{
          width: '40%',
        }}
      />
    </ActualLocationContainer>
  );
};
   
  export default ActualLocation;