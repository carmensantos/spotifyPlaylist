import React from 'react';
import Track from '../Track/Track'
import './TrackList.css';

export default function TrackList(props) {

    return (
        <div className="TrackList">
            <Track ToDisplay={props.ToDisplay} button={props.button}/>
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