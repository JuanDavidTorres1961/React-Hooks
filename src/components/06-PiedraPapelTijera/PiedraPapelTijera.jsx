import React, { useState } from 'react';

export const PiedraPapelTijera = () => {

  const classA = 'text-red-600 text-4x1'
  const classB = 'text-green-600 text-4x1'
  const classC = 'text-blue-600 text-4x1'

  const [styleColor, setStyleColor] = useState('black'); 

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
      setResult('Empató');
      setStyleColor(classC);
    } else if (
      (choice === 'Piedra' && randomCpuChoice === 'Tijera') ||
      (choice === 'Papel' && randomCpuChoice === 'Piedra') ||
      (choice === 'Tijera' && randomCpuChoice === 'Papel')
    ) {
      setResult('Ganó');
      setStyleColor(classB);
    } else {
      setResult('Perdió');
      setStyleColor(classA);
    }
  };

  return (
    <>
      <div className='flex justify-evenly w-64 flex-col items-center'>
        <h1 className='text-2xl text-orange-600'>Piedra, Papel o Tijera</h1>
        <p className='text-xl' style={{ color: 'white' }}>Usuario Eligio: {userChoice}</p>
        <p className='text-xl text-fuchsia-600'>CPU Chose: {cpuChoice}</p>
        <h2 className={`text-xl ${styleColor}`}>Usted: {result}</h2>
      </div> <br />

      <div className='flex justify-evenly w-64'>
        <button className='bg-sky-100 p-2' onClick={() => handleChoiceClick('Piedra')}>Piedra</button>
        <button className='bg-sky-100 p-2' onClick={() => handleChoiceClick('Papel')}>Papel</button>
        <button className='bg-sky-100 p-2' onClick={() => handleChoiceClick('Tijera')}>Tijera</button>
      </div>
    </>
  );
};


