import React from "react";
import ContentEditable from "react-contenteditable";

export default function Field({
  fieldName,
  currentCharacter,
  editMode,
  handleChangeField,
}) {

  return (
    <div className={fieldName}>
      {fieldName === "name" ? " " : `${fieldName}: ` }
      <ContentEditable
        className={`editableField ${fieldName} ${editMode && "editing"}`}
        name={fieldName}
        disabled={!editMode}
        html={currentCharacter[[fieldName]]}
        onChange={ (e) => {handleChangeField(fieldName, e.currentTarget.innerHTML)}}
      />
    </div>
  );
}
