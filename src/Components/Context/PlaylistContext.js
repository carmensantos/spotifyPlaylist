import React, { useState, createContext } from 'react';

export const PlaylistContext = createContext();

export function PlaylistProvider(props) {

    const [playlist, setPlaylist] = useState([{name: 'trackname1', artist: 'artist1', 
            album: 'album1', id: 1}, {name: 'trackname2', artist: 'artist2', 
            album: 'album2', id: 2}, {name: 'trackname10', artist: 'artist10', 
            album: 'album10', id: 10}]);
    const [searchResult, setSearchResult] = useState([{name: 'trackname3', artist: 'artist3', 
            album: 'album3', id: 3}, {name: 'trackname4', artist: 'artist4', 
            album: 'album4', id: 4}, {name: 'trackname5', artist: 'artist5', 
            album: 'album5', id: 5}])
    const [playlistName, setPlaylistName] = useState('playlistName')
    

    const infoContext = {
        playlist,
        setPlaylist,
        searchResult,
        setSearchResult,
        playlistName,
        setPlaylistName
    }
    return(
        <PlaylistContext.Provider value={infoContext} >
            {props.children}
        </PlaylistContext.Provider>
    )
} 