import React, { Component } from 'react'
import AnimeSearchBar from '../components/AnimeSearchBar'
import AnimeList from '../components/AnimeList'

const URL = "https://api.jikan.moe/v3/search/anime?q=";
class AnimeSearchBarContainer extends Component {
  state = {
    animes: [],
    query: ''
  }

  componentDidUpdate(prevState) {
    if (this.state.animes === prevState.animes) {
      return true
    }
  }

  handleOnChange = (event) => {
    event.persist();
    this.setState({
      query: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.fetchAnime(this.state.query)
  }

  fetchAnime = (query) => {
    fetch(URL + query)
    .then(response => response.json())
    .then(anime => {
      this.setState({
        animes: anime.results
      })
    })
  }
  render() {
    return (
      <div>
        <AnimeSearchBar 
          query={this.state.query}
          handleChange={this.handleOnChange}
          handleSubmit={this.handleOnSubmit}
        />
        <AnimeList anime={this.state.animes} /> 
      </div>
    )
  }
}

export default AnimeSearchBarContainer