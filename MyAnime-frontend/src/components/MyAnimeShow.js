import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { deleteAnime } from '../redux/actions/animeActions'
// const MyAnimeShow = (props) => {


class MyAnimeShow extends Component {

  handleDelete = id => {
    this.props.deleteAnime(id);
    this.props.history.push("/myanime");
  };
  render() {
    const anime = this.props.location.state.anime;
    console.log(anime.id);
    return (
      <div>
        <li>
          <img src={anime.image_url} alt={`${anime.title}`} />
          <h3>{anime.title}</h3>
          <p>{anime.synopsis}</p>
          <button onClick={() => this.handleDelete(anime.id)}>
            Remove from List
          </button>

          {/* <MyAnimeForm handleChange={handleChange} handleSubmit={handleSubmit} /> */}
          {/* Write a MyAnimeReviews component  that renders the reviews for an anime */}
        </li>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    myAnime: state.animeReducer.anime
  };
};

export default connect(mapStateToProps, {deleteAnime} )(MyAnimeShow);
