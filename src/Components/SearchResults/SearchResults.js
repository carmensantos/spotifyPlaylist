import React, { useContext } from 'react';
import TrackList from '../TrackList/TrackList';
import { PlaylistContext } from '../Context/PlaylistContext';
import './SearchResults.css';

export default function SearchResults(props){

    const infoContext = useContext(PlaylistContext);

    return(
        <div className="SearchResults">
            <h2>Search Results</h2>
            <TrackList ToDisplay={infoContext.searchResult} button={'+'}/>
        </div>
    )
}

