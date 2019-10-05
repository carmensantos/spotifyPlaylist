import React, { useState, createContext } from 'react';

export const PlaylistContext = createContext();

export function PlaylistProvider(props) {

    const [playlist, setPlaylist] = useState([]);
    const [searchResult, setSearchResult] = useState([])
    const [playlistName, setPlaylistName] = useState('playlistName')
    const [search, setSearch] = useState('to find in spotify')
    

    const infoContext = {
        playlist,
        setPlaylist,
        searchResult,
        setSearchResult,
        playlistName,
        setPlaylistName,
        search,
        setSearch
    }
    return(
        <PlaylistContext.Provider value={infoContext} >
            {props.children}
        </PlaylistContext.Provider>
    )
} 