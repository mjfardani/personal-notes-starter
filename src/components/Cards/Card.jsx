import React from "react";
import { showFormattedDate } from "../../utils/index.js";

function Card({ id, title, body, createdAt, archived, onDelete, toggleArchived }) {
  // Fungsi untuk menangani perubahan status archived
  const handleToggleArchived = () => {
    toggleArchived(id); // Memanggil fungsi toggleArchived untuk mengubah status archived
  };

  return (
    <div className="Card">
      <article
        className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
      >
        <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
          <time dateTime={createdAt} className="block text-xs text-gray-500">
            {showFormattedDate(createdAt)}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">{title}</h3>
            <p className="card-item_body">{body}</p>
          </a>

          <div className="mt-4 flex flex-wrap gap-1">
            <a
              onClick={() => onDelete(id)} // Fungsi onDelete dipanggil saat klik
              className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 cursor-pointer"
            >
              Delete
            </a>

            <a
              onClick={handleToggleArchived} // Fungsi untuk toggle archived status
              className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs ${archived ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'} cursor-pointer`}
            >
              {archived ? 'Unarchive' : 'Archive'}
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;
