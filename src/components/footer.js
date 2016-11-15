import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          { '\u00A9' } Nick Phillips<span> - { Date().toString() }</span>
        </p>

      </footer>
    );
  }
}
