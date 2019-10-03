import React, { useContext } from 'react';
import { PlaylistContext } from '../Context/PlaylistContext';
import './Track.css';

export default function Track(props) {

    const infoContext = useContext(PlaylistContext);

    function trackAction(track) {
        if (props.button === '+') {
            addTrack(track);
        } else if (props.button === '-') {
            removeTrack(track);
        }
    }

    function addTrack(track) {
        if (infoContext.playlist.every(element => element.id !== track.id)) {
            infoContext.setPlaylist([...infoContext.playlist, track])
        } else {
            alert('This song already exists in your playlist ' + infoContext.playlistName)
        }
        console.log('The song ' + track + ' was added to your playlist ' + infoContext.playlistName)
    }

    function removeTrack(track) {
        if (infoContext.playlist.some(element => element.id === track.id)) {
            console.log(infoContext.playlist)
            infoContext.playlist.splice(infoContext.playlist.indexOf(track), 1);
            infoContext.setPlaylist(infoContext.playlist)
            console.log(infoContext.playlist)
        } 
    }
    
    return (
            <div className="Track"> 
                    <div className="Track-information">
                        <h3>{props.ToDisplay.name}</h3>
                        <p>{props.ToDisplay.artist} / {props.ToDisplay.album}</p>
                        <button className="Track-action" onClick={ () => trackAction(props.ToDisplay)}>{props.button}</button>
                    </div>  
            </div>
    )
    
}

/*
add later to button:
onClick={() => setPlaylist(newTrack)}



{props.ToDisplay.map(element => <p>{element.name}</p>)}





export class Track extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isRemoval: false
        }

        this.renderAction = this.renderAction.bind(this);
    }

    renderAction() {
        if (this.state.isRemoval) {
            return <button className="Track-action">++</button>
        } else {
            return <button className="Track-action">--</button>
        }
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track + 'LOLE'}</h3>
                    <p>{this.props.track + 'LOL' + this.props.track}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}
*/