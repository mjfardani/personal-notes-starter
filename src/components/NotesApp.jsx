import React from "react";
import Navbar from './Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';
import Toogle from './Toogle/Toogle';
import CardList from './Cards/CardList';
import { getInitialData } from '../utils/index.js';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            activeTab: 'all', // Tab aktif default
            searchQuery: '', // State untuk kata kunci pencarian
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.toggleArchived = this.toggleArchived.bind(this);
        this.switchTab = this.switchTab.bind(this);
        this.handleSearch = this.handleSearch.bind(this); // Menambahkan metode untuk pencarian
    }

    // Fungsi untuk berpindah tab
    switchTab(tab) {
        this.setState({ activeTab: tab });
    }

    // Fungsi untuk menangani perubahan pencarian
    handleSearch(query) {
        this.setState({ searchQuery: query });
    }

    onAddNoteHandler(newNote) {
        this.setState((prevState) => ({
            notes: [...prevState.notes, newNote],
        }));
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    toggleArchived(id) {
        this.setState((prevState) => ({
            notes: prevState.notes.map(note =>
                note.id === id ? { ...note, archived: !note.archived } : note
            ),
        }));
    }

    render() {
        const { notes, activeTab, searchQuery } = this.state;

        // Filter catatan berdasarkan tab aktif
        let filteredNotes = activeTab === 'archived'
            ? notes.filter(note => note.archived)
            : notes.filter(note => !note.archived);

        // Filter catatan berdasarkan pencarian
        filteredNotes = filteredNotes.filter(note =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.body.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
            <div>
                <Navbar />
                <div>
                    <SearchBar onSearch={this.handleSearch} addNote={this.onAddNoteHandler} />
                </div>
                <Toogle switchTab={this.switchTab} />
                <CardList
                    notes={filteredNotes}
                    onDelete={this.onDeleteHandler}
                    toggleArchived={this.toggleArchived}
                />
            </div>
        );
    }
}

export default NotesApp;
