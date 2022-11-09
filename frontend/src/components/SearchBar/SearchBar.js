import React from 'react';

function SearchBar() {
    return (
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Enter Match </span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Team Name"
            name="s" 
        />
        <input
            type="text"
            id="header-search"
            placeholder="Date"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    );
}

export default SearchBar;