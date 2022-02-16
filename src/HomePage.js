import './App.css';
import PlayButton from './Components/PlayButton';
import { BackgroundContainer } from './Style';

function HomePage () {
  return (
    <div>
      <BackgroundContainer>
      <h1>Seja bem vindo ao Random Game!</h1>
      <h3>Encontre o menor caminho para chegar no destino final.</h3>
        <PlayButton></PlayButton>
      </BackgroundContainer>
    </div>
  );
}

export default HomePage;
