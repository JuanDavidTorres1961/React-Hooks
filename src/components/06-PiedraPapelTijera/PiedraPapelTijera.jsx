import React, { useState } from 'react';

export const PiedraPapelTijera = () => {
  const [userChoice, setUserChoice] = useState('');
  const [cpuChoice, setCpuChoice] = useState('');
  const [result, setResult] = useState('');

  const choices = ['Piedra', 'Papel', 'Tijera'];

  const handleChoiceClick = (choice) => {
    setUserChoice(choice);
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomCpuChoice = choices[randomIndex];
    setCpuChoice(randomCpuChoice);
    
    if (choice === randomCpuChoice) {
      setResult('Empate');
    } else if (
      (choice === 'Piedra' && randomCpuChoice === 'Tijera') ||
      (choice === 'Papel' && randomCpuChoice === 'Piedra') ||
      (choice === 'Tijera' && randomCpuChoice === 'Papel')
    ) {
      setResult('Ganaste');
    } else {
      setResult('Perdiste');
    }
  };

  return (
    <>
      <div className='flex justify-evenly w-64 flex-col items-center'>
        <h1 className='text-2xl text-orange-600'>Piedra, Papel o Tijera</h1>
        <p className='text-xl' style={{ color: 'white' }}>Usuario Eligio: {userChoice}</p>
        <p className='text-xl'>CPU Chose: {cpuChoice}</p>
        <h2 className='text-xl'>Usted: {result}</h2>
      </div> <br />

      <div className='flex justify-evenly w-64'>
        <button className='bg-sky-100 p-2' onClick={() => handleChoiceClick('Piedra')}>Piedra</button>
        <button className='bg-sky-100 p-2' onClick={() => handleChoiceClick('Papel')}>Papel</button>
        <button className='bg-sky-100 p-2' onClick={() => handleChoiceClick('Tijera')}>Tijera</button>
      </div>
    </>
  );
};


