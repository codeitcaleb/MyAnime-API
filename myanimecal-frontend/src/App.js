import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnimeSearchBarContainer from './containers/AnimeSearchBarContainer'
import { connect } from 'react-redux';
import { getAnime } from './redux/actions/animeActions'

class App extends Component {

  componentDidMount() {
    this.props.getAnime()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <AnimeSearchBarContainer history={this.props.history} />
        </header>
      </div>
    );
  }
}

export default connect(null, { getAnime })(App);
