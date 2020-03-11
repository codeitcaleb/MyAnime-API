import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAnime } from '../redux/actions/addAnime'
class MyAnime extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAnime: (anime) => dispatch(addAnime(anime))
  }
}

export default connect(null, mapDispatchToProps)(MyAnime)