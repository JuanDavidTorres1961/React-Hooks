import React, { useState } from 'react';

export const InputText = () => {
  const [text, setText] = useState('');
  const [Color, setColor] = useState('black'); 

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setColor('red'); 
    } else{
      setColor('black'); 
    }
  };

  return (
    <>
      <p style={{ color: Color }}>Texto ingresado: {text} </p>
      <input
        placeholder='Ingresa el texto'
        className='w-96 bg-sky-100 p-2'
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={handleKeyPress} 
      />
    </>
  );
}
