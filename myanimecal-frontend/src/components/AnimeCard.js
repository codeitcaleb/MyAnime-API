import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { addAnime, deleteAnime } from '../redux/actions/animeActions'

// const AnimeCard = ({ anime }) => {
//   return (
//     <div>
//       <li>
//         <img src={anime.image_url} alt={`${anime.title}`} />
//         <h3>
//           <Link
//             to={{
//               pathname: `/anime/${anime.mal_id}`,
//               state: { anime }
//             }}
//           >
//             {anime.title}
//           </Link>
//         </h3>
//         <p>{anime.synopsis}</p>
//       </li>
//     </div>
//   );
// };

class AnimeCard extends Component {
  handleAdd = anime => {
    this.props.addAnime(anime);
    this.props.history.push("/myanime");
  };

  handleDelete = e => {
    this.props.deleteAnime(e.target.id);
    this.props.history.push("/myanime");
  };
  render() {
    const anime = this.props.anime;

    return (
      <div>
        <li>
          <img src={anime.image_url} alt={`${anime.title}`} />
          <h3>
            {anime.title}

            {this.props.myAnime.find(a => a.title === anime.title) ? (
              <button id={anime.id} onClick={this.handleDelete}>
                Remove from List
              </button>
            ) : (
              <button id={anime.id} onClick={this.handleAdd}>
                Add to List
              </button>
            )}
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

export default connect(mapStateToProps, { addAnime, deleteAnime })(AnimeCard)

// const AnimeCard = ({ anime }) => {
//   return (
//     <div>
//       <li>
//         <img src={anime.image_url} alt={`${anime.title}`} />
//         <h3>
//           <Link
//             to={{
//               pathname: `/anime/${anime.mal_id}`,
//               state: { anime }
//             }}
//           >
//             {anime.title}
//           </Link>
//         </h3>
//         <p>{anime.synopsis}</p>
//       </li>
//     </div>
//   );
// };