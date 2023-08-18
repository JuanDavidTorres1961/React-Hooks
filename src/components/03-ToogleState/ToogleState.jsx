import React, { useState } from 'react';

export const ToogleState = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>    
      <p>Estado: {isOn ? 'Encendido' : 'Apagado'}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </>    
  );
}
