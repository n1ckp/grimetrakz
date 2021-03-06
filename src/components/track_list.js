import _ from 'lodash';
import React, { Component } from 'react';
import axios from 'axios';
import querystring from 'querystring';

import TrackListItem from './track_list_item';
import SearchBar from './search_bar';

export default class TrackList extends Component {
  constructor(props) {
    super(props);
    this.artists = [
      { name: "Tempa T", id: "5itdSz26wZC57bo3dhQTPq" },
      { name: "Westwood*", id: "1RjfpdWaIYqGbmDURVAbb0" },
      { name: "JME", id: "4IZLJdhHCqAvT4pjn8TLH5" }
    ];
    this.state = {
      currentArtist: this.artists[0],
      numTracksDisplayed: 5,
      tracks: []
    };
  }

  fetchTopTracks(artist) {
    const query = {
      country: 'GB'
    };
    axios.get(`https://api.spotify.com/v1/artists/${artist.id}/top-tracks?` + querystring.stringify(query))
      .then((res) => {
        this.setState({tracks: res.data.tracks});
      });
  }

  getTopTen(event) {
    this.setState({numTracksDisplayed: 10});
  }

  componentDidMount() {
    this.fetchTopTracks(this.state.currentArtist);
  }

  renderTracks() {
    if (this.state.tracks.length === 0) {
      return (<p>Fetching tracks...</p>);
    }
    return this.state.tracks.slice(0,this.state.numTracksDisplayed).map((track) => {
      return (<TrackListItem key={track.id} {...track} />);
    });
  }

  changeArtist(artist) {
    this.setState({ currentArtist: artist, numTracksDisplayed: 5, tracks: [] });
    this.fetchTopTracks(artist);
  }

  renderTabs() {
    return this.artists.map((artist) => {
      return (
        <span
          className={(artist === this.state.currentArtist) ? "artist-tab selected" : "artist-tab"}
          key={artist.id}
          onClick={this.changeArtist.bind(this,artist)}>
          {artist.name}
        </span>
      );
    })
  }

  artistSearch(searchTerm) {
    const query = {
      type: "artist",
      q: searchTerm
    }
    axios.get(`https://api.spotify.com/v1/search?` + querystring.stringify(query))
      .then((res) => {
        const artist = res.data.artists.items[0];
        if (artist === undefined) { return; }

        // only show tracks if artist has 'grime' as a genre
        if (artist.genres.indexOf("grime") !== -1) {
          this.changeArtist({name: artist.name, id: artist.id});
        }
      });
  }

  render() {
    return (
      <div className="container text-center">
        <SearchBar onSearchChange={_.debounce((x) => { this.artistSearch(x) }, 1000)}/>
        { this.renderTabs() }
        <h1>{this.state.currentArtist.name}'s Top {this.state.numTracksDisplayed} Trackz</h1>
        <button
          type="button"
          className="button"
          disabled={this.state.numTracksDisplayed === 10}
          onClick={this.getTopTen.bind(this)}>
          Get Top 10
        </button>
        <div className="track-list">
          { this.renderTracks() }
        </div>
        <p className="disclaimer">* Probably not the real Tim Westwood, even though this artist's genre is listed as 'grime'.</p>
      </div>
    );
  }
}
