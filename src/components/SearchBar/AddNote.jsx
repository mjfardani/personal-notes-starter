import React, { useState } from 'react';

const AddNote = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleBodyChange = (e) => setBody(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '' || body === '') {
      alert('Harap isi semua kolom!');
      return;
    }

    const newNote = {
      title,
      body,
      createdAt: new Date().toDateString(),
      id: Date.now(), // ID unik berdasarkan waktu
    };

    addNote(newNote); // Panggil addNote dari props
    setTitle('');
    setBody('');
    setIsPopupOpen(false); // Menutup popup setelah submit
  };

  return (
    <div className="relative">
      <button
        onClick={openPopup}
        className="inline-block rounded border border-current px-8 py-3 my-3 text-sm font-medium text-indigo-500 transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring"
      >
        Add Note
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg bg-white p-6 shadow-lg">
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
              Get started today
            </h1>
            <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4">
              <div>
                <label htmlFor="title" className="sr-only">
                  Title
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="title"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter Title"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    value={body}
                    onChange={handleBodyChange}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNote;
