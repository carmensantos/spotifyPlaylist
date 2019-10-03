import React, { useContext } from 'react';
import './SearchBar.css'
import { PlaylistContext } from '../Context/PlaylistContext';
import { spotifySearch } from '../../util/Spotify';

export default function SearchBar(props){

    const infoContext = useContext(PlaylistContext);

    function submitSearch(search) {
        //sendSearch -> send to spotify API
        spotifySearch(search).then(searchResults => {
            infoContext.setSearchResult(searchResults);
        });
        console.log('search criteria: ' + search + ' - submited to spotify API')
    }
    return(
        <div className="SearchBar">
            <input
            placeholder="Enter A Song, Album, or Artist"
            />
            <button className="SearchButton" onClick={() => submitSearch(infoContext.sendSearch)}>SEARCH</button>
        </div>  
    )
}



/*
export class SearchBar extends React.Component{
    constructor(props){
        super(props)
    
        this.state = {
            search: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            search: event.target.value
        })
    }
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={event => this.handleChange(event)}/>
                <button className="SearchButton">SEARCH</button>
            </div>  
        )
    }
}
*/














