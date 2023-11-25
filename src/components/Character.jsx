import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Buttons from "./Buttons";
import CharacterField from "./CharacterField";
import CharacterStatField from "./CharacterStatField";

export default function Character({
  character,
  addNewCharacter,
  updateCharacter,
  deleteCharacter,
}) {
  const [mode, setMode] = useState("view");
  const [currentCharacter, setCurrentCharacter] = useState(character);

  const statsKeys = Object.keys(character.stats);

  const handleClick = (e) => {
    const { name } = e.target;
    switch (name) {
      case "new":
        const newCharacter = {
          id: uuidv4(),
          name: "",
          pic: "",
          race: "",
          class: "",
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
              title: "",
              description: "",
            },
          ],
          spellsOrSkills: [
            {
              title: "",
              description: "",
            },
          ],
        };
        addNewCharacter(newCharacter);
        break;
      case "edit":
        setMode("edit");
        break;
      case "save":
        updateCharacter(currentCharacter);
        setMode("view");
        break;
      case "cancel":
        setMode("view");
        break;
      case "delete":
        deleteCharacter(currentCharacter);
        break;
      default:
        break;
    }
    console.log(currentCharacter); //debug
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setCurrentCharacter({
      ...currentCharacter,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      key={character.name}
      className={character.name.replace(" ", "_") + " container page_container"}
    >
      <Buttons mode={mode} handleClick={handleClick} />
      <div className="content">
        <div className="name">
          {" "}
          <CharacterField
            mode={mode}
            fieldName="name"
            currentCharacter={currentCharacter}
            handleChange={handleChange}
          />
        </div>
        <div className="race">
          Race:
          <CharacterField
            mode={mode}
            fieldName="race"
            currentCharacter={currentCharacter}
            handleChange={handleChange}
          />
        </div>
        <div className="class">
          Class:
          <CharacterField
            mode={mode}
            fieldName="class"
            currentCharacter={currentCharacter}
            handleChange={handleChange}
          />
        </div>
        <div className="stats-and-other">
          <div className="stats">
            {statsKeys.map((statKey, i) => (
              <div key={statKey} className={statKey + " stat"}>
                <span className="stat_title">
                  {statKey.charAt(0).toUpperCase() + statKey.slice(1)}
                </span>
                <span className="stat_score">
                  <CharacterStatField
                    mode={mode}
                    statKey={statKey}
                    currentCharacter={currentCharacter}
                    handleChange={handleChange}
                    type="number"
                  />
                </span>
                <span className="stat_modifier">
                  + {Math.floor((currentCharacter.stats[statKey] - 10) / 2)}
                </span>
              </div>
            ))}
          </div>
          <div className="ac_hp">
            <div className="ac">
              <span className="title">Armor Class:</span>
              <span className="score">
                <CharacterField
                  mode={mode}
                  fieldName="armorClass"
                  currentCharacter={currentCharacter}
                  handleChange={handleChange}
                  type="number"
                />
              </span>
            </div>
            <div className="hp">
              <span className="title">Hit Points:</span>
              <span className="score">
                <CharacterField
                  mode={mode}
                  fieldName="hitPoints"
                  currentCharacter={currentCharacter}
                  handleChange={handleChange}
                  type="number"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="other">
          <div className="spells">
            <h3>Skills and Spells</h3>
            {character.spellsOrSkills.map((spellOrSkill, i) => (
              <div key={i}>
                <span className="title">{spellOrSkill.title}</span>
                <span className="description">{spellOrSkill.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pic-and-spells">
        <div className="pic">
          <img src={character.pic} alt="character pic" />
        </div>
        <div className="equipment">
          <h3>Equipment</h3>
          {character.equipment.map((equipment, i) => (
            <div key={i}>
              <span className="title">{equipment.title} </span>
              <span className="description">{equipment.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
