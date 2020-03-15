import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addAnime, deleteAnime } from '../redux/actions/animeActions'

class AnimeShow extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.state.anime === prevProps.myAnime) {
      return true;
    }
  }

  handleAdd = anime => {
    this.props.addAnime(anime);
    this.props.history.push("/myanime");
  };

  handleDelete = id => {
    this.props.deleteAnime(id);
    this.props.history.push("/");
  };

  render() {
    const anime = this.props.location.state.anime;
    
    return (
      <div>
        <li>
          <img src={anime.image_url} alt={anime.title} />
          <h3>{anime.title}</h3>
          <p>{anime.synopsis}</p>
          {this.props.myAnime.find(a => a.title === anime.title) ? (
            <p>Already on list</p>
          ) : (
            <button id={anime.id} onClick={() => this.handleAdd(anime)}>
              Add to List
            </button>
          )}
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

export default connect(mapStateToProps, { addAnime, deleteAnime })(AnimeShow);