import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Buttons from "./Buttons";
import CharacterField from "./CharacterField";
import CharacterStatField from "./CharacterStatField";
import CharacterItems from "./CharacterItems";

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
              id: uuidv4(),
              title: "",
              description: "",
            },
          ],
          spellsOrSkills: [
            {
              id: uuidv4(),
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
        setCurrentCharacter(character);
        break;
      case "delete":
        deleteCharacter(currentCharacter);
        break;
      default:
        break;
    }
    // console.log(currentCharacter); //debug
  };

  const handleChange = (e) => {
    console.log("e", e);
    if (e.target.classList.contains("statField")) {
      const stats = { ...currentCharacter.stats };
      stats[e.target.name] = e.target.value;
      setCurrentCharacter({
        ...currentCharacter,
        stats: stats,
      });
    } else {
      setCurrentCharacter({
        ...currentCharacter,
        [e.target.name]: e.target.value,
      });
    }
  };

  useEffect(() => {
    // console.log('currentCharacter:', currentCharacter)
  }, [currentCharacter]);

  return (
    <div
      className={
        currentCharacter.name.replace(" ", "_") + " container page_container"
      }
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
            {statsKeys.map((statKey) => (
              <CharacterStatField
                mode={mode}
                statKey={statKey}
                currentCharacter={currentCharacter}
                handleChange={handleChange}
                type="number"
              />
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
            <CharacterItems
              mode={mode}
              itemType="spellsOrSkills"
              currentCharacter={currentCharacter}
            />
          </div>
        </div>
      </div>
      <div className="pic-and-spells">
        <div className="pic">
          <img src={currentCharacter.pic} alt="character pic" />
          {mode === "view" ? (
            " "
          ) : (
            <input
              type="url"
              name="pic"
              placeholder="https://url/to/your/pic.jpg"
              value={currentCharacter.pic}
              onChange={handleChange}
            />
          )}
        </div>
        <div className="equipment">
          <h3>Equipment</h3>
          <CharacterItems
            mode={mode}
            itemType="equipment"
            currentCharacter={currentCharacter}
          />
        </div>
      </div>
    </div>
  );
}
