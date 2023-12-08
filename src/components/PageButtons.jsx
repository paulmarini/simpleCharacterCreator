export default function Buttons({ editMode, deleteMode, handleClick, toggleDeleteButton }) {


  return (
    <div className="page-buttons no-print">
      {editMode ? (
        <>
          <button className="save" name="save" onClick={handleClick}>
            Save
          </button>
          <button className="cancel" name="cancel" onClick={handleClick}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <button className="edit" name="edit" onClick={handleClick}>
            Edit
          </button>
          {deleteMode ? (
            <>
              <h3 className="delete-message">Are You Sure?</h3>
              <button className='delete-danger' name='delete' onClick={handleClick}>
                YES!
              </button>
              <button className='cancel center' name='cancel' onClick={toggleDeleteButton}>
                NO!
              </button>
            </>
          ) : (
            <>
              <button className="delete" name="delete" onClick={toggleDeleteButton}>
                Delete
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}

/*
*/