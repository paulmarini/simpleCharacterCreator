import React from "react";

export default function CharacterStatField({ mode, statKey, type, currentCharacter, handleChange }) {
    console.log(mode, statKey, type, currentCharacter, handleChange)
  const output =
    mode === "view" ? (
      currentCharacter.stats[statKey]
    ) : (
      <input
        name={statKey}
        value={currentCharacter.stats[statKey]}
        onChange={handleChange}
        type={type ? type : "text"} 
      />
    );
  return output;
}

