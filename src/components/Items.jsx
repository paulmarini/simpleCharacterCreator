import Item from "./Item";

export default function Items({
  editMode,
  itemType,
  currentCharacter,
  handleAddItemRow,
  handleChangeItem,
  handleDeleteItemRow,
}) {
  return (
    <>
      {editMode && (
        <button className="itemButton addRow no-print" onClick={()=> {handleAddItemRow(itemType)}}>
          Add new
        </button>
      )}
      {currentCharacter[itemType].map((item) => (
        <div key={item.id}>
          {editMode && (
            <button
              className="itemButton deleteRow no-print"
              onClick={() => {
                handleDeleteItemRow(itemType, item.id);
              }}
            >
              Delete
            </button>
          )}
          <Item
            editMode={editMode}
            itemType={itemType}
            item={item}
            handleChangeItem={handleChangeItem}
          />
        </div>
      ))}
    </>
  );
}
