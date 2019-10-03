import React, { useContext } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';
import { spotifySave } from '../../util/Spotify';
import { PlaylistContext } from '../Context/PlaylistContext';

export default function Playlist(props) {

    const infoContext = useContext(PlaylistContext);

    function handleChange(e) {
        infoContext.setPlaylistName(e.target.value);
        console.log(infoContext.playlistName)
    }

    function savePlaylist(playlistName, tracks) {
        console.log(infoContext.playlistName)
        spotifySave(playlistName, tracks).then(() => {
            infoContext.setPlaylistName('New Playlist')
            infoContext.setPlaylist([])
        });
    }
    return(
        <div className="Playlist" key={infoContext.playlist}>
            <input 
            placeholder='Playlist name'
            onChange={e => handleChange(e)}
            />
            <TrackList ToDisplay={infoContext.playlist} playlistName={infoContext.playlistName} button={'-'}/>
            <button className="Playlist-save" onClick={() => savePlaylist(infoContext.playlistName, infoContext.playlist)}>SAVE TO SPOTIFY</button>
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