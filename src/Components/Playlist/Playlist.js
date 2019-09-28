import React, { useState, useContext } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList'
import { PlaylistContext, PlaylistProvider } from '../Context/PlaylistContext';

export default function Playlist(props) {

    const infoContext = useContext(PlaylistContext);
    //const  = infoContext;

/*
    function removeTrack(track) {
        console.log(track.id)
        const newPlaylistTracks = playlist.filter(element => element.id != track.id)
        setPlaylist.playlistTracks(newPlaylistTracks)
    }
*/
    function handleChange(e) {
        infoContext.setPlaylist(e.target.value);
        console.log(infoContext.playlist)
    }

    function savePlaylist(e) {
        infoContext.setPlaylist(e);
        console.log(infoContext.playlist)
    }
    return(
        <div className="Playlist">
            <input 
            placeholder='Playlist name'
            onChange={e => handleChange(e)}
            />
            <TrackList ToDisplay={infoContext.trackName} button={'-'}/>
            <button className="Playlist-save" onClick={() => savePlaylist(infoContext.playlist)}>SAVE TO SPOTIFY</button>
        </div>
    )
}

/*
export class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVal: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            inputVal: e.target.value
        })
    }

    render(){
        return(
            <div className="Playlist">
                <input value="New Playlist" onChange={this.handleChange}/>
                <TrackList />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}
*/
// written in Hooks