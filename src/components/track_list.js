import React, { Component } from 'react';
import TrackListItem from './track_list_item';
import axios from 'axios';
import querystring from 'querystring';

export default class TrackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        this.setState({tracks: res.data.tracks.splice(0,5)});
      });
  }

  componentDidMount() {
    this.fetchTopTracks();
  }

  renderTracks() {
    if (this.state.tracks.length === 0) {
      return (<p>Fetching tracks...</p>);
    }
    return this.state.tracks.map((track) => {
      return (<TrackListItem key={track.id} {...track} />);
    });
  }

  render() {
    return (
      <div className="track-list-container">
        { this.renderTracks() }
      </div>
    );
  }
}
