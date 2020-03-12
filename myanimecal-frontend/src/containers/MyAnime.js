import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAnime, deleteAnime } from '../redux/actions/addAnime'
class MyAnime extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.getAnime();
  }

  handleOnDelete = (id) => {
    this.props.deleteAnime(id)
  }

  render() {
    let myAnimeList = this.props.anime.map(anime => (
        <div>
          <li>
            <img src={anime.image_url} />
            <h3>{anime.title}</h3>
            <p>{anime.synopsis}</p>
            <button onClick={(anime) => this.handleOnDelete(anime.id)}>
              Remove from List
            </button>
          </li>
        </div>
    ))
    
    return (
      <div>
       {myAnimeList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    anime: state.anime
  }
}

export default connect(mapStateToProps, { getAnime, deleteAnime })(MyAnime)