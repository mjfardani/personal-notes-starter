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
            activeTab: 'all', // Default tab
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.toggleArchived = this.toggleArchived.bind(this);
        this.switchTab = this.switchTab.bind(this); // Fungsi untuk berpindah tab
    }

    // Fungsi untuk berpindah tab
    switchTab(tab) {
        this.setState({ activeTab: tab });
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
        const { notes, activeTab } = this.state;

        // Filter catatan berdasarkan tab aktif
        const filteredNotes = activeTab === 'archived'
            ? notes.filter(note => note.archived)
            : notes.filter(note => !note.archived);

        return (
            <div>
                <Navbar />
                <div>
                    <SearchBar addNote={this.onAddNoteHandler} />
                </div>
                <Toogle switchTab={this.switchTab} /> {/* Kirimkan switchTab ke Toogle */}
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
