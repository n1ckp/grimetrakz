import React, { Component } from 'react';
import dateFormat from 'dateformat';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <span className="footer-name">{ '\u00A9' } Nick Phillips</span>
        <span className="footer-date">{ dateFormat(Date(), "dddd dS mmmm yyyy") }</span>
      </footer>
    );
  }
}
