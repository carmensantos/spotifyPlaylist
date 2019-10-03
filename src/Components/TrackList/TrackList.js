import React, { useContext } from 'react';
import Track from '../Track/Track';
import { PlaylistContext } from '../Context/PlaylistContext';
import './TrackList.css';

export default function TrackList(props) {

    const infoContext = useContext(PlaylistContext);

    return (

        <div className="TrackList" key={infoContext.playlist}>
        {
            Array.from(props.ToDisplay).map(track => {
                return <Track ToDisplay={track} key={track.id} button={props.button}/>
            })
        }
        </div>
    )
}


/*
class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                <Track track = {this.props.tracks} />
            </div>
        )
    }
}
*/