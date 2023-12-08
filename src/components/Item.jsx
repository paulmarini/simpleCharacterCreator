import ContentEditable from "react-contenteditable";

export default function Item({
  editMode,
  item,
  itemType,
  handleChangeItem,
}) {
  return (
    <div>
      <ContentEditable
        className={`title ${editMode && "editing"}`}
        html={item.title}
        disabled={!editMode}
        onChange={(e) => {
          handleChangeItem(itemType, item.id, 'title', e.currentTarget.innerHTML);
        }}
      />
      <ContentEditable
        className={`description ${editMode && "editing"}`}
        html={item.description}
        disabled={!editMode}
        onChange={(e) => {
          handleChangeItem(itemType, item.id, 'description', e.currentTarget.innerHTML);
        }}
      />
    </div>
  );
}
