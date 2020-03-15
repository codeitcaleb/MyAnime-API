import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAnime, deleteAnime } from '../redux/actions/animeActions'
import MyAnimeCard from '../components/MyAnimeCard';
class MyAnime extends Component {
  state = {
    review: ""
  }

  handleOnChange = (event) => {
    event.persist();
    this.setState({
      review: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state)
  }

  // componentDidMount() {
  //     this.props.getAnime();
  // }

  handleOnDelete = (id) => {
    this.props.deleteAnime(id)
  }

  render() {
    let myAnimeList = this.props.animes.map(anime => (
       <MyAnimeCard
          key={anime.id} 
          anime={anime} 
          // handleChange={this.handleOnChange} 
          // handleSubmit={this.handleOnSubmit} 
          // handleDelete={this.handleOnDelete}   
      />
    ))
    
    return (
      <div>
       {myAnimeList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.animeReducer.anime)
  return {
    animes: state.animeReducer.anime,
    reviews: state.reviewReducer.reviews
  }
}

export default connect(mapStateToProps, { getAnime, deleteAnime })(MyAnime)