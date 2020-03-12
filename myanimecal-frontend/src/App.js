import React from 'react';
import logo from './logo.svg';
import './App.css';
import AnimeSearchBarContainer from './containers/AnimeSearchBarContainer'

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
