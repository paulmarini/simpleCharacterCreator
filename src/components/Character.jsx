import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import sanitizeHtml from "sanitize-html";

import PageButtons from "./PageButtons";
import Field from "./Field";
import Input from "./Input";
import StatInput from "./StatInput";
import Items from "./Items";

export default function Character({
  character,
  updateCharacter,
  deleteCharacter,
}) {
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false)
  const [currentCharacter, setCurrentCharacter] = useState(character);

  const handleClick = (e) => {
    const { name } = e.target;
    switch (name) {
      case "edit":
        setEditMode(true);
        setDeleteMode(false)
        break;
      case "save":
        updateCharacter(currentCharacter);
        setEditMode(false);
        setDeleteMode(false)
        break;
      case "cancel":
        setEditMode(false);
        setDeleteMode(false)
        setCurrentCharacter(character);
        break;
      case "delete":
        deleteCharacter(currentCharacter);
        setEditMode(false);
        setDeleteMode(false)
        break;
      default:
        break;
    }
    // console.log(currentCharacter); //debug
  };

  const toggleDeleteButton = () => {
    setDeleteMode(!deleteMode)  
  }

  const handleChangeField = (fieldName, contents) => {
    const sanitizeConf = { allowedTags: [], allowedAttributes: {} };
    const sanitizedContents = sanitizeHtml(contents, sanitizeConf);
    setCurrentCharacter((prevValue) => {
      return {...prevValue, [fieldName]: sanitizedContents}
    });
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.currentTarget;

    if (e.target.classList.contains("statField")) {
      const stats = { ...currentCharacter.stats };
      stats[name] = value;
      setCurrentCharacter((prevValue) => {
        return {...prevValue, stats: stats}
      });
    } else {
      setCurrentCharacter((prevValue) => {
        return {...prevValue, [name]: value}
      });
    }
  };

  const handleAddItemRow = (itemType) => {
    setCurrentCharacter(prevValue => {
      const itemList = [ ...prevValue[itemType]]
      itemList.push({title: 'title', description: 'description', id: uuidv4()})
      return { ...prevValue, [itemType]: itemList }
    })
  }
  const handleDeleteItemRow = (itemType, itemId)  => {
    setCurrentCharacter(prevValue => {
      const itemList = [ ...prevValue[itemType].filter(item => item.id !== itemId)]
      return { ...prevValue, [itemType]: itemList }
    })
  }

  const handleChangeItem = (itemType, itemId, fieldName, contents) => {
    const sanitizeConf = { allowedTags: [], allowedAttributes: {} };
    const sanitizedContents = sanitizeHtml(contents, sanitizeConf);
    setCurrentCharacter((prevValue) => {
      const itemsList =  [ ...prevValue[itemType]]
      const item = itemsList.find(item => item.id === itemId)
      item[fieldName] = sanitizedContents
      return { ...prevValue, [itemType]: itemsList }
    });
  };


  return (
    <div
      className={
        currentCharacter.name.replace(" ", "-") + " container page-container"
      }
    >
      <PageButtons 
        editMode={editMode} 
        deleteMode={deleteMode}
        handleClick={handleClick} 
        toggleDeleteButton={toggleDeleteButton}
      />
      <div className="content">
        <Field
          fieldName="name"
          currentCharacter={currentCharacter}
          editMode={editMode}
          handleChangeField={handleChangeField}
        />
        <Field
          fieldName="race"
          currentCharacter={currentCharacter}
          editMode={editMode}
          handleChangeField={handleChangeField}
        />
        <Field
          fieldName="class"
          currentCharacter={currentCharacter}
          editMode={editMode}
          handleChangeField={handleChangeField}
        />

        <div className="stats-and-other">
          <div className="stats">
            {Object.keys(character.stats).map((statKey) => (
              <StatInput
                key={statKey}
                editMode={editMode}
                statKey={statKey}
                currentCharacter={currentCharacter}
                handleChangeInput={handleChangeInput}
              />
            ))}
          </div>

          <div className="ac-hp">
            <div className="ac">
              <span className="title">Armor Class:</span>
              <span className="score">
                <Input
                  fieldName="armorClass"
                  currentCharacter={currentCharacter}
                  type="number"
                  editMode={editMode}
                  handleChangeInput={handleChangeInput}
                />
              </span>
            </div>
            <div className="hp">
              <span className="title">Hit Points:</span>
              <span className="score">
                <Input
                  fieldName="hitPoints"
                  currentCharacter={currentCharacter}
                  type="number"
                  editMode={editMode}
                  handleChangeInput={handleChangeInput}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="other">
          <div className="spells">
            <h3>Skills and Spells</h3>
            <Items
              editMode={editMode}
              itemType="spellsOrSkills"
              currentCharacter={currentCharacter}
              handleChangeItem={handleChangeItem}
              handleAddItemRow={handleAddItemRow}
              handleDeleteItemRow={handleDeleteItemRow}
            />
          </div>
        </div>
      </div>
      <div className="pic-and-spells">
        <div className="pic">
          <img src={currentCharacter.pic} alt="character pic" />
          {!editMode ? (
            <span className="image-input-spacer"></span>
          ) : (
            <input
              type="url"
              name="pic"
              placeholder="https://url/to/your/pic.jpg"
              className="editing"
              value={currentCharacter["pic"]}
              onChange={handleChangeInput}
            />
          )}
        </div>
        <div className="equipment">
          <h3>Equipment</h3>
          <Items
            editMode={editMode}
            itemType="equipment"
            currentCharacter={currentCharacter}
            handleChangeItem={handleChangeItem}
            handleAddItemRow={handleAddItemRow}
            handleDeleteItemRow={handleDeleteItemRow}
          />
        </div>
      </div>
    </div>
  );
}
