import React from "react";
import Card from "./Card";

function CardList({ notes, onDelete, toggleArchived }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-2 px-3 py-2">
      {/* Jika notes kosong, tampilkan pesan "Tidak ada catatan" */}
      {notes.length === 0 ? (
        <div className="col-span-full text-center text-gray-500 mt-7">
          Tidak ada catatan.
        </div>
      ) : (
        notes.map((note) => (
          <Card
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            toggleArchived={toggleArchived}
            archived={note.archived}
            {...note}
          />
        ))
      )}
    </div>
  );
}

export default CardList;
