import React, { Component } from 'react';

export default class TrackListItem extends Component {
  render() {
    return (
      <div className="row track">
        <div className="track-player">
          <iframe src={`https://embed.spotify.com/?uri=spotify:track:${this.props.id}`} width="80" height="85" frameBorder="0" allowTransparency="true"></iframe>
        </div>
        <div className="track-info">
          <div className="track-name">{this.props.name}</div>
          <div className="track-album-name">{this.props.album.name}</div>
          <div className="track-number">Track {this.props.track_number}</div>
        </div>
      </div>
    );
  }
}
