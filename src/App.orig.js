import './App.scss';
import React, { useEffect, useState } from 'react';
import getCharacters from './characters';

function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    setCharacters(getCharacters())
    // const characterData = getCharacters()
    // console.log(characterData)
    // setCharacters(characterData)
  }, [])


    const pages = characters.map(character => {
      const statsKeys = Object.keys(character.stats)
      return (
      <div key={character.name} className={character.name.replace(' ', '_') + " container page_container"} >
        <div className="content">
          <div className="name">{character.name}</div>
          <div className="race">Race: {character.race}</div>
          <div className="class">Class: {character.class}</div>
          <div className="stats-and-other">
            <div className="stats">
            {
              statsKeys.map((statKey, i) => (
                <div key={statKey} className={statKey + ' stat'}>
                  <span className="stat_title">{statKey.charAt(0).toUpperCase() + statKey.slice(1)}</span>
                  <span className="stat_score">{character.stats[statKey]}</span>
                  <span className="stat_modifier">+ {Math.floor((character.stats[statKey] -10)/2)}</span>
                </div>
              ))
            }
            </div>
            <div className="ac_hp">
              <div className="ac">
                <span className="title">Armor Class:</span> 
                <span className='score'> {character.armorClass}</span> 
              </div>
              <div className="hp">
                <span className="title">Hit Points:</span> 
                <span className='score'> {character.hitPoints}</span> 
              </div>
            </div>
          </div> 
          <div className="other">
          <div className="spells">
              <h3>Skills and Spells</h3>
          {
            character.spellsOrSkills.map((spellOrSkill, i) => (
              <div key={i}>
                <span className="title">{spellOrSkill.title}</span>
                <span className="description">{spellOrSkill.description}</span>
              </div>
            ))
          }
          </div>
          </div>
        </div>
        <div className="pic-and-spells">
          <div className="pic"><img src={character.pic} alt="character pic" /></div>
            <div className="equipment">
              <h3>Equipment</h3>
            {
              character.equipment.map((equipment, i) => (
                <div key={i}>
                  <span className="title">{equipment.title}  </span>
                  <span className="description">{equipment.description}</span>
                </div>
              ))
            }
            </div>
        </div>
      </div>
      )
    })

  return (
   <>
   <div>
     {pages}
  </div>

   </>
  );
}

export default App;

