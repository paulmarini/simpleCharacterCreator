import React from "react";

export default function CharacterField({ mode, fieldName, type, currentCharacter, handleChange }) {
  const output =
    mode === "view" ? (
      currentCharacter[fieldName]
    ) : (
      <input
        name={fieldName}
        value={currentCharacter[fieldName]}
        onChange={handleChange}
        type={type ? type : "text"} 
      />
    );
  return output;
}
