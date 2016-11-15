import React, { Component } from 'react';
import TrackListItem from './track_list_item';
import axios from 'axios';
import querystring from 'querystring';

export default class TrackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numTracksDisplayed: 5,
      tracks: []
    };
  }

  fetchTopTracks() {
    // Spotify id for Tempa T (predetermined)
    const id = "5itdSz26wZC57bo3dhQTPq";
    const query = {
      country: 'GB'
    };
    axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?` + querystring.stringify(query))
      .then((res) => {
        console.log(res.data.tracks);
        this.setState({tracks: res.data.tracks});
      });
  }

  getTopTen(event) {
    this.setState({numTracksDisplayed: 10});
  }

  componentDidMount() {
    this.fetchTopTracks();
  }

  renderTracks() {
    if (this.state.tracks.length === 0) {
      return (<p>Fetching tracks...</p>);
    }
    return this.state.tracks.slice(0,this.state.numTracksDisplayed).map((track) => {
      return (<TrackListItem key={track.id} {...track} />);
    });
  }

  render() {
    return (
      <div className="container text-center">
        <h1>Tempa T's Top {this.state.numTracksDisplayed} Trackz</h1>
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
      </div>
    );
  }
}
