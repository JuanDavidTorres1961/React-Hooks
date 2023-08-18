import React, { useState } from 'react';

export const Button = () => {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayText(inputText);
    setInputText('')
  };

  return (
    <>
      <input  className="w-96" type="text"  placeholder="Escribe algo..." value={inputText} onChange={handleInputChange} /> <br />
      <button  className='w-96 bg-sky-500 p-2' onClick={handleButtonClick}>Mostrar en el párrafo</button> <br />
      <p  className='w-96 bg-sky-200 p-2' >el texto que ingreso en el input fue: {displayText}</p>
    </>
  );
};

