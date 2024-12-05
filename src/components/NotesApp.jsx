import React from 'react';
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
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }
    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => ({
            notes: [
                ...prevState.notes,
                {
                    id: +new Date(),
                    title,
                    body,
                    createdAt: new Date().toDateString(),
                },
            ],
        }));
    }

    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <SearchBar addNote={this.onAddNoteHandler} />
                </div>
                <Toogle />
                <CardList notes={this.state.notes} onDelete={this.onDeleteHandler} />

            </div>
        )
    }
}

export default NotesApp;