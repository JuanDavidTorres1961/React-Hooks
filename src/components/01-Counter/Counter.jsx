import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const classA = 'text-blue-600 text-4x1'
  const classB = 'text-green-600 text-4x1'

  const [count, setCount] = useState(0);
  const [styleColor, setStyleColor] = useState(classA); 


  const handleAdd = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const toReset = () => setCount(0);

  useEffect(() => {
    if (count >= 10) {
      setStyleColor(classB); 
    } else {
      setStyleColor(classA); 
    }
  }, [count]);

  return (
    <>
      <p className={`text-4xl ${styleColor}`}>Contador: {count}</p>
      <button className='w-40 text-center text-sky-700 bg-gray-200 rounded-2xl m-4' onClick={handleAdd}>Incrementar</button>
      <button className='w-40 text-center text-sky-700 bg-gray-200 rounded-2xl m-4' onClick={decrease}>Decrementar</button>
      <button className='w-40 text-center text-sky-700 bg-gray-200 rounded-2xl m-4' onClick={toReset}>Resetear</button>
    </>
  );
};



