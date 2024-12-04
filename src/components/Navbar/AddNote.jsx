import React, { Component } from 'react';

class AddNote extends Component {
  constructor(props) {
    super(props);

    // Inisialisasi state untuk form dan popup
    this.state = {
      title: '',
      body: '',
      isPopupOpen: false
    };

    // Binding fungsi
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Fungsi untuk membuka popup
  openPopup() {
    this.setState({ isPopupOpen: true });
  }

  // Fungsi untuk menutup popup
  closePopup() {
    this.setState({ isPopupOpen: false });
  }

  // Fungsi untuk menangani perubahan input name
  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  // Fungsi untuk menangani perubahan input tag
  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  // Fungsi untuk menangani pengiriman form
  handleSubmit(event) {
    event.preventDefault();
    // Lakukan sesuatu dengan data form
    console.log('Name:', this.state.name, 'Tag:', this.state.tag);
    // Reset state setelah submit
    this.setState({ name: '', tag: '' });
  }

  render() {
    return (
      <div className="relative">
        <button
          onClick={this.openPopup}
          className="inline-block rounded border border-current px-8 py-3 my-3 text-sm font-medium text-indigo-500 transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring"
        >
          Add Note
        </button>

        {this.state.isPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg bg-white p-6 shadow-lg">
              <button
                onClick={this.closePopup}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>

              <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                Get started today
              </h1>
              <form onSubmit={this.handleSubmit} className="mb-0 mt-6 space-y-4">
                <div>
                  <label htmlFor="title" className="sr-only">Title</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="title"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter Title"
                      value={this.state.name}
                      onChange={this.handleTitleChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <label className="sr-only" htmlFor="message">Message</label>
                    <textarea
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Message"
                      rows="8"
                      id="message"
                      value={this.state.tag}
                      onChange={this.handleBodyChange}
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
  }
}

export default AddNote;
