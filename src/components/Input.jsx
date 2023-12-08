import React from "react";

export default function Input({
  fieldName,
  currentCharacter,
  type,
  editMode,
  handleChangeInput,
}) {
  return editMode ? (
    <input
      className="editing"
      name={fieldName}
      value={currentCharacter[fieldName]}
      type="number"
      min="0"
      max="200"
      step="1"
      onChange={handleChangeInput}
    />
  ) : (
    currentCharacter[fieldName]
  );
}
