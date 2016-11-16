import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onChange(term) {
    this.setState({ term });
    if (term === "") { return; }
    this.props.onSearchChange(term);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search"
        value={ this.state.term }
        onChange={event => {this.onChange(event.target.value)}}>
      </input>
    );
  }
}
