import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
require('../style/app.scss');

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <h1>safe fam!</h1>
        </div>
        <Footer/>
      </div>
    );
  }
}
