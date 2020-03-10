import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import AnimeSearchBarContainer from './containers/AnimeSearchBarContainer'
import AnimeCalendarContainer from './containers/AnimeCalendarContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <AnimeSearchBarContainer />
      </header>
    </div>
  );
}

export default App;
