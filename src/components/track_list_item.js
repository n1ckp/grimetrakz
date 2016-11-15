import React, { Component } from 'react';

export default class TrackListItem extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}
