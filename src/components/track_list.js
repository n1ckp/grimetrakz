import React, { Component } from 'react';
import TrackListItem from './track_list_item';

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
      return (<TrackListItem key={track.name} {...track} />);
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
