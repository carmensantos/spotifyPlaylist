import React, { useContext } from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';
import { PlaylistContext } from '../Context/PlaylistContext'

export default function SearchResults(props){

    const infoContext = useContext(PlaylistContext);

    return(
        <div className="SearchResults">
            <h2>Search Results</h2>
            <TrackList ToDisplay={infoContext.searchResult} button={'+'}/>
        </div>
    )
}


/*
export class SearchResults extends React.Component {

    render() {

        return(
            <div className="SearchResults">
                <h2>{this.props.SearchResults}</h2>
                <TrackList tracks = {this.props.SearchResults} />
            </div>

        )
    }
}
*/
