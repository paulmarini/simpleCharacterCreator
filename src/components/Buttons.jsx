import React from "react";

export default function Buttons({ mode, handleClick }) {
  return (
    <div className="buttons">
      {mode === "view" ? (
        <>
          <button className="add" name="add" onClick={handleClick}>new</button>
          <button className="edit" name="edit" onClick={handleClick}>
            edit
          </button>
        </>
      ) : (
        <>
          <button className="save" name="save" onClick={handleClick}>
            save
          </button>
          <button className="cancel" name="cancel" onClick={handleClick}>
            cancel
          </button>
        </>
      )}
    </div>
  );
}
