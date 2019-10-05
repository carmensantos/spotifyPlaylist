import React, { useContext } from 'react';
import { PlaylistContext } from '../Context/PlaylistContext';
import { spotifySearch } from '../../util/Spotify';
import './SearchBar.css'

export default function SearchBar(){

    const infoContext = useContext(PlaylistContext);

    function submitSearch(search) {
        //sendSearch -> send to spotify API
        spotifySearch(search).then(searchResults => {
            infoContext.setSearchResult(searchResults);
        });
        console.log('search criteria: ' + search + ' - submited to spotify API')
    }

    function handleTermChange(event) {
        infoContext.setSearch(event.target.value)
    }

    return(
        <div className="SearchBar">
            <input
            placeholder="Enter A Song, Album, or Artist"
            onChange={handleTermChange}
            />
            <button className="SearchButton" onClick={() => submitSearch(infoContext.search)}>SEARCH</button>
        </div>  
    )
}














