import React, { Component } from 'react';

export default class TrackListItem extends Component {
  render() {
    return (
      <div className="row track">
        <div className="small-6 columns">
          <div className="track-player"><iframe src={`https://embed.spotify.com/?uri=spotify:track:${this.props.id}`} width="85" height="85" frameBorder="0" allowTransparency="true"></iframe></div>
          <div className="track-name">{this.props.name}</div>
        </div>
        <div className="small-6 columns track-album-name">
          {this.props.album.name} - <span className="track-number">Track {this.props.track_number}</span>
        </div>
      </div>
    );
  }
}
