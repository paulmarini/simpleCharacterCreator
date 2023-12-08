import React from "react";

export default function Header({
  addNewCharacter,
  handleExport,
  emptyCharacter,
  openFilePicker,
  loading,
  errors,
}) {
  const handleAdd = () => {
    addNewCharacter(emptyCharacter);
  };

  return (
    <div className="page-header no-print">
      <button className="add" onClick={handleAdd}>
        Add New
      </button>
      <button
        className="print"
        onClick={() => {
          window.print();
        }}
      >
        Print
      </button>
      <button className="export" onClick={handleExport}>
        Export
      </button>
      <button className="import" onClick={openFilePicker}>
        {loading ? "Loading ..." : "Import"}
      </button>
      {errors}
    </div>
  );
}
