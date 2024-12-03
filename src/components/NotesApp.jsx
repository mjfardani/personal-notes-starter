import React from 'react';
import Navbar from './Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';
import Toogle from './Toogle/Toogle';
import Card from './Cards/Card';


class NotesApp extends React.Component {
    render() {
        return (
        <div>
            <Navbar/>
            <SearchBar/>
            <Toogle/>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-2 px-3 py-2'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
        )
    }
}

export default NotesApp;