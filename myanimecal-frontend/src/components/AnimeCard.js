import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
// import { addAnime, deleteAnime } from '../redux/actions/animeActions'

class AnimeCard extends Component {

  render() {
    const anime = this.props.anime;

    return (
      <div>
        <li>
          <img src={anime.image_url} alt={`${anime.title}`} />
          <h3>
            <Link
              to={{
                pathname: `/anime/${anime.mal_id}`,
                state: { anime }
              }}
            >
              {anime.title}
            </Link>
          </h3>
          <p>{anime.synopsis}</p>
        </li>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myAnime: state.animeReducer.anime
  }
}

export default connect(mapStateToProps)(AnimeCard)

// { addAnime, deleteAnime }