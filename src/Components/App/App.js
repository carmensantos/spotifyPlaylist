import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { PlaylistProvider } from '../Context/PlaylistContext';
import './App.css';


function App() {
  return(
    <PlaylistProvider>
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
      </div>
    </PlaylistProvider>
  )
}


export default App;


/*
class App extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props)

    this.state = {
      playlistName: 'name',
      playlistTracks: [{
        name: '',
        artist: '',
        album: '',
        id: ''
      }, {
        name: '',
        artist: '',
        album: '',
        id: ''
      }],
      searchResults: [1, 2, 3]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    const trackIds = this.state.playlistTracks.map(element => element.id)
    if (trackIds.every(id => id != track.id)) {
      this.state.playlistTracks.push(track);
    } else {
      alert('This Track is already on your playlist.')
    }
  }



  removeTrack(track) {
    console.log(track.id)
    const newPlaylistTracks = this.state.playlistTracks.filter(element => element.id != track.id)
    this.setState({
      playlistTracks: newPlaylistTracks
    });
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
          <Playlist playlistName={this.state.playlistName} onRemove={this.removeTrack} playlistTracks={this.state.playlistTracks}/>
        </div>
      </div>
    </div>
    );
  }
}
*/

  /*
  function addTrack(track) {
    const trackIds = this.state.playlistTracks.map(element => element.id)
    if (trackIds.every(id => id != track.id)) {
      this.state.playlistTracks.push(track);
    } else {
      alert('This Track is already on your playlist.')
    }
  }
*/