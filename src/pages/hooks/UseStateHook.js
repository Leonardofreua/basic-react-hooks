import React, { useState } from 'react';

export default function UseStateHook() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input value={newTech} onChange={(e) => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}
