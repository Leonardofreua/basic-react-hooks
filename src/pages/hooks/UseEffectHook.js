import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UseEffectHook() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  // componentDidMount - dependency array is empty
  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if (storageTechs) {
      setTechs(JSON.parse(storageTechs));
    }

    // Only componentWillAmount
    // return () => {};
  }, []);

  // componentDidUpdate - monitoring -- techs state --
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  return (
    <>
      <p>
        <Link to="/">{'<<<<'}</Link>
      </p>
      <h1>useEffect hook</h1>
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
