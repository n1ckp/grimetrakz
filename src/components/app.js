import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import TrackList from './track_list';
require('../style/app.scss');

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <TrackList/>
        <Footer/>
      </div>
    );
  }
}
