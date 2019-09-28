import React, { useState, createContext } from 'react';

export const PlaylistContext = createContext();

export function PlaylistProvider(props) {
    
    const [playlist, setPlaylist] = useState('playlistName');
    const [trackId, setTrackId] = useState('id');
    const [trackName, setTrackName] = useState('trackName');
    const [trackArtist, setTrackArtist] = useState('trackArtist');
    const [trackAlbum, setTrackAlbum] = useState('trackAlbum');
    const [sendSearch, setSearch] = useState("this is what I'm searching for");
    const [searchResult, setSearchResult] = useState('this is the result of my search');

    const infoContext = {
        playlist,
        setPlaylist,
        trackId,
        setTrackId,
        trackName,
        setTrackName, 
        trackArtist,
        setTrackArtist,
        trackAlbum,
        setTrackAlbum,
        sendSearch,
        setSearch,
        searchResult,
        setSearchResult
    }
    return(
        <PlaylistContext.Provider value={infoContext} >
            {props.children}
        </PlaylistContext.Provider>
    )
} 