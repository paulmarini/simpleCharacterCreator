import './App.scss';
import React, { useEffect, useState, useMemo } from 'react';
import { v4 as uuidv4 } from "uuid";
import { useFilePicker } from 'use-file-picker';

import Header from './components/Header';
import Character from './components/Character.jsx';

//temp, only to load the temp file
// import getCharacters from './characters';

function App() {
  const [characters, setCharacters] = useState([])
  const { openFilePicker, filesContent, loading, errors } = useFilePicker({
    accept: '.json',
    multiple: false,
  })



  const emptyCharacter = {
    id: uuidv4(),
    name: "Name",
    pic: "",
    race: "Race",
    class: "Class",
    level: 3,
    stats: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },
    armorClass: 10,
    hitPoints: 10,
    equipment: [
      {
        id: uuidv4(),
        title: "title",
        description: "description",
      },
    ],
    spellsOrSkills: [
      {
        id: uuidv4(),
        title: "title",
        description: "description",
      },
    ],
  }

  //Initialize characters
  const initializeCharacters = () => {
    const charactersInLocalStorage = JSON.parse(localStorage.getItem('characters'))
      // console.log('xx', charactersInLocalStorage)
    if (!charactersInLocalStorage || !charactersInLocalStorage.length) {
      // console.log('nostorage')
      setCharacters([{ ...emptyCharacter }])
    } else {
      // console.log('yes storage chars: ', charactersInLocalStorage)
      setCharacters(charactersInLocalStorage)
    }
  }

  //Initialize the characters on page load
  useEffect(() => {
    initializeCharacters()
  }, [])

  //Load new content from import button
  useEffect(() => {
    if (!filesContent.length || !filesContent) return

    // console.log(filesContent)

    const charactersContent = filesContent[0].content
    // console.log(charactersContent)  //debug
    // console.log(charactersContent.length)//debug
    if (charactersContent.length) {
      setCharacters(JSON.parse(charactersContent))
    }
  }, [filesContent])

  //Update localStorage every time the characters state changes
  useEffect(() => {
    localStorage.setItem('characters', JSON.stringify(characters))
  }, [characters])

  const handleExport = () => {
    const jsonData = localStorage.getItem('characters')
    // const fileData = JSON.stringify(jsonData);
    const blob = new Blob([jsonData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const now = new Date(Date.now())
    const fileName = `characters-${now.getTime()}.json`
    link.download = fileName;
    link.href = url;
    link.click();
  }



  const addNewCharacter = (newCharacter) => {
    // console.log('newCharacter:', newCharacter)
    // console.log('characters:', characters)
    setCharacters(prevValue => {
      return [newCharacter, ...prevValue]
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


  return (
    <>
      <div>
        {characters.map(character => (
          <Character
            key={character.id}
            character={character}
            updateCharacter={updateCharacter}
            deleteCharacter={deleteCharacter}
          />
        ))}
      </div>
      <Header
        emptyCharacter={emptyCharacter}
        addNewCharacter={addNewCharacter}
        handleExport={handleExport}
        openFilePicker={openFilePicker}
        loading={loading}
        errors={errors}
      />
    </>
  );
}

export default App;
