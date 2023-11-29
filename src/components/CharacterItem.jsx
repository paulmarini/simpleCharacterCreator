import React from "react";

export default function CharacterItem({ mode, item, handleChange }) {
  return (
    <div key={item.id}>
      <span className="title">{item.title}: </span>
      <span className="description">{item.description}</span>
    </div>
  );
}
