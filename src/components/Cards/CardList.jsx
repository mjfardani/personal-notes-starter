import React from "react";
import Card from "./Card";

function CardList({ notes, onDelete, toggleArchived }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-2 px-3 py-2">
      {notes.map((note) => (
        <Card
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          toggleArchived={toggleArchived}
          archived={note.archived} // Pass archived status
          {...note}
        />
      ))}
    </div>
  );
}

export default CardList;
