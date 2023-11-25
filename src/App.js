import './App.scss';
import React, { useEffect, useState } from 'react';
import getCharacters from './characters';
import Character from './components/Character.jsx';

function App() {

  const [characters, setCharacters] = useState([])


  const addNewCharacter = (newCharacter) => {
    console.log('newCharacter:', newCharacter)
    console.log('characters:', characters)
    setCharacters(prevValue => {
    return [...prevValue, newCharacter]
    })
  }

  const updateCharacter = (updatedCharacter) => {
    setCharacters(prevValue => {
      return (
        prevValue.map(character => (character.id === updatedCharacter.id) ? { ...updatedCharacter } : { ...character })
      )
    })
  }

  const deleteCharacter = (deletedCharacter) => {
    setCharacters(prevValue => {
      return (
        prevValue.filter(character => (character.id !== deletedCharacter.id))
      )
    })
  }

  useEffect(() => {
    setCharacters(getCharacters())
    // const characterData = getCharacters()
    // console.log(characterData)
    // setCharacters(characterData)

  }, [])


  const pages = characters.map(character => <Character character={character} addNewCharacter={addNewCharacter} updateCharacter={updateCharacter} deleteCharacter={deleteCharacter} />)

  return (
    <>
      <div>
        {pages}
      </div>

    </>
  );
}

export default App;
