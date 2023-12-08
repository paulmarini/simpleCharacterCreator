import React from "react";

export default function StatInput({
  editMode,
  statKey,
  type,
  currentCharacter,
  handleChangeInput,
}) {
  return (
    <div className={statKey + " stat"}>
      <span className="stat-title">
        {statKey.charAt(0).toUpperCase() + statKey.slice(1)}
      </span>
      <span className="stat-score">
        {editMode ? (
          <input
            className="statField editing"
            name={statKey}
            value={currentCharacter.stats[statKey]}
            type="number"
            min="3"
            max="20"
            step="1"
            onChange={handleChangeInput}
          />
        ) : (
          currentCharacter.stats[statKey]
        )}
      </span>
      <span className="stat-modifier">
        + {Math.floor((currentCharacter.stats[statKey] - 10) / 2)}
      </span>
    </div>
  );
}
