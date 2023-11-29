import { useState, useEffect } from "react";
import CharacterItem from "./CharacterItem";

export default function CharacterItems({
  mode,
  itemType,
  currentCharacter,
  handleChange,
}) {
  const [items, setItems] = useState(currentCharacter[itemType]);

  console.log("ITEMTYPE:", itemType);
  console.log("currentCharacter[itemType]:", currentCharacter[itemType]);
  console.log('items:', items);

  return items.map((item) => (
    <CharacterItem mode={mode} handleChange={handleChange} item={item} />
  ));
}
