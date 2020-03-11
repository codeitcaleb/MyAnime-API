import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addAnime } from '../redux/actions/addAnime'
class AnimeShow extends Component {

  handleOnClick = (anime) => {
    console.log(anime)
    // this.addAnime(anime)
  }

  render() {
    // debugger
    let anime = this.props.location.state.anime;
    // console.log(anime);
    return (
      <div>
        <li>
          <img src={anime.image_url} />
          <h3>{anime.title}</h3>
          <p>{anime.synopsis}</p>
          <button onClick={() => this.handleOnClick(anime)} >Add Anime to List</button>
        </li>
      </div>
    );
  }
}

export default connect(null, { addAnime })(AnimeShow);