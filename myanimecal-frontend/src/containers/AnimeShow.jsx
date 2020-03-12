import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addAnime } from '../redux/actions/animeActions'
class AnimeShow extends Component {

  handleOnClick = (anime) => {
    this.props.addAnime(anime)
  }

  render() {
    let anime = this.props.location.state.anime;
    
    return (
      <div>
        <li>
          <img src={anime.image_url} alt={anime.title} />
          <h3>{anime.title}</h3>
          <p>{anime.synopsis}</p>
          <button onClick={() => this.handleOnClick(anime)} >Add to List</button>
        </li>
      </div>
    );
  }
}

export default connect(null, { addAnime })(AnimeShow);