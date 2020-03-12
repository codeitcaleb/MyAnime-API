import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAnime, deleteAnime } from '../redux/actions/animeActions'
import MyAnimeCard from '../components/MyAnimeCard';
class MyAnime extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.getAnime();
  }

  handleOnDelete = (id) => {
    // console.log(id)
    this.props.deleteAnime(id)
  }

  render() {
    let myAnimeList = this.props.anime.map(anime => (
       <MyAnimeCard anime={anime} />
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