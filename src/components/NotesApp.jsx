import React from 'react';
import Navbar from './Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';
import Toogle from './Toogle/Toogle';
import CardList from './Cards/CardList';
import {getInitialData, showFormattedDate} from '../utils/index.js';


class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }
    }
    render() {
        return (
        <div>
            <Navbar/>
            <SearchBar/>
            <Toogle/>
        <CardList notes={this.state.notes} />
        <CardList notes={this.state.notes} />
        </div>
        )
    }
}

export default NotesApp;