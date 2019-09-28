import React, { useState, useContext } from 'react';
import './Track.css';
import { PlaylistContext } from '../Context/PlaylistContext';

export default function Track(props) {

    const newTrack = 'something'
    //const playlist = 'lol'
    const infoContext = useContext(PlaylistContext);

    //const [isRemoval, changeRemoval] = useState(false);
    /*
    function addTrack(newTrack) {
        const trackIds = playlist.map(element => element.id)
        if (trackIds.every(id => id != newTrack.id)) {
            setPlaylist({
                ...playlist,
                id: newTrack.id
            });
        }
      }
    
    */
    function trackAction(track) {
        if (props.button == '+') {
            addTrack(track);
        } else if (props.button == '-') {
            removeTrack(track);
        }
    }

    function addTrack(track) {
        console.log('The song ' + {track} + ' was added to your playlist ' + infoContext.playlist)
    }

    function removeTrack(track) {
        console.log('The song ' + {track} + ' was removed from your playlist ' + infoContext.playlist)
    }
    
    return (
            <div className="Track">
                    <div className="Track-information">
                        <p>{props.ToDisplay}</p>
                        <button className="Track-action" onClick={ () => trackAction(props.ToDisplay)}>{props.button}</button>
                    </div>  
            </div>
    )
    
}

/*
add later to button:
onClick={() => setPlaylist(newTrack)}


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