import React from 'react';

const PlayButton = ({
    onClick
}) => {
    
     return (
       <div>
        <button onClick={onClick}>Começar</button>
       </div>
     );
   };
   
   export default PlayButton;