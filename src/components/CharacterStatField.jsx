import React from "react";

export default function CharacterStatField({ mode, statKey, type, currentCharacter, handleChange }) {
    // console.log('mode:', mode, 'statKey:', statKey, 'type:', type, /*'currentCharacter', currentCharacter */)
  const statScore =
    mode === "view" ? (
      currentCharacter.stats[statKey]
    ) : (
      <input
        className="statField"
        name={statKey}
        value={currentCharacter.stats[statKey]}
        onChange={handleChange}
        type={type ? type : "text"} 
      />
    );
  return (
    <div key={statKey} className={statKey + " stat"}>
        <span className="stat_title">
            {statKey.charAt(0).toUpperCase() + statKey.slice(1)}
        </span>
        <span className="stat_score">
            {statScore}
        </span>
        <span className="stat_modifier">
            + {Math.floor((currentCharacter.stats[statKey] - 10) / 2)}
        </span>
        </div>
  )
}

