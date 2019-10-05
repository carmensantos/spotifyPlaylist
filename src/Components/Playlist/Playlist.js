import React, { useContext } from 'react';
import TrackList from '../TrackList/TrackList';
import { spotifySave } from '../../util/Spotify';
import { PlaylistContext } from '../Context/PlaylistContext';
import './Playlist.css';

export default function Playlist() {

    const infoContext = useContext(PlaylistContext);

    function updatePlaylistName(name) {
        infoContext.setPlaylistName(name);
        console.log(infoContext.playlistName)
    }

    function handleChange(e) {
        updatePlaylistName(e.target.value);
    }

    function savePlaylist() {
        const trackUris = infoContext.playlist.map(track => track.uri);
        spotifySave(infoContext.playlistName, trackUris).then(() => {
            infoContext.setPlaylistName('New Playlist');
            infoContext.setPlaylist([]);
        });
    }

    return(
        <div className="Playlist" key={infoContext.playlist}>
            <input 
            defaultValue={'Playlist name'}
            onChange={handleChange}
            />
            <TrackList ToDisplay={infoContext.playlist} playlistName={infoContext.playlistName} button={'-'}/>
            <button className="Playlist-save" onClick={savePlaylist}>SAVE TO SPOTIFY</button>
        </div>
    )
}
