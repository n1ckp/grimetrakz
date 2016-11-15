import React, { Component } from 'react';

export default class TrackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [
        {name: "Next Hype"},
        {name: "Boi Off Da Ting"},
        {name: "Shut Ya Mouth"},
        {name: "Peng Ting"},
        {name: "Mandem"}
      ]
    };
  }

  renderTracks() {
    return this.state.tracks.map((track) => {
      return (<li key={track.name}><h3>{track.name}</h3></li>);
    });
  }

  render() {
    return (
      <div className="track-list-container">
        <ul>{ this.renderTracks() }</ul>
      </div>
    );
  }
}
