import React, { useState } from 'react';

export const ToDoList = () => {
    const [textArea, setTextArea] = useState('');
    const [listArea, setListArea] = useState([]);

    const handleTextArea = (e) => {
        setTextArea(e.target.value);
    };

    const addTextArea = () => {
        if (textArea !== "") {
            setListArea(prevTask => [...prevTask, textArea]);
            setTextArea("");
        }
    };

    return (
        <>
            <h1 className='text-orange-600 text-2xl'>ToDoList</h1> <br />
            <div>
                <textarea cols="50" rows="10" placeholder='Escriba algo....' value={textArea} onChange={handleTextArea}></textarea><br /> <br />
                <button className='w-96 bg-orange-600 p-2 text-violet-50 text-base' onClick={addTextArea}>Agregar</button> <br /> <br />
                <ul className='w-96 p-1 text-violet-50 text-base gap-10'>
                    {listArea.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
            </div>
        </>
    )
}

