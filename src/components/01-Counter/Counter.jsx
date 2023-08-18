import React, { useState } from 'react'

export const Counter = () => {

  const [count, setCount] = useState(0);
  const handleAdd = () => setCount(count+1)
  const decrease = () => setCount(count-1)
  const toReset = () => setCount(0)

  return (
    <>
      <p className='text-4xl text-sky-400'>Contador: {count}</p>
      <button className='w-40 text-center text-sky-700 bg-gray-200 rounded-2xl m-4' onClick={ handleAdd }>Incrementar</button> 
      <button className='w-40 text-center text-sky-700 bg-gray-200 rounded-2xl m-4' onClick={ decrease }>Decrementar</button>   
      <button className='w-40 text-center text-sky-700 bg-gray-200 rounded-2xl m-4' onClick={ toReset }>Resetear</button>   
    </>
    
  )
}

