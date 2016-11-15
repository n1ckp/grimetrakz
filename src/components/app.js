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
        <div className="container">
          <h1>Tempa T's top 5 trackz</h1>
          <TrackList/>
        </div>
        <Footer/>
      </div>
    );
  }
}
