import React from 'react';
import { ButtonContainer, ButtonStart } from './Style'

const PlayButton = ({
    onClick
}) => {
    
     return (
       <ButtonContainer>
        <ButtonStart onClick={onClick}>Começar</ButtonStart>
       </ButtonContainer>
     );
   };
   
   export default PlayButton;