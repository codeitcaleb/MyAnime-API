import React, { Component } from "react";
import { Link } from "react-router-dom";
const MyAnimeCard = ({ anime }) => {

  return (
    <div>
      <li>
        <img src={anime.image_url} alt={`${anime.title}`} />
        <h3>
          <Link
            to={{
              pathname: `/myanime/${anime.id}`,
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
};

export default MyAnimeCard;


// class MyAnimeShow extends Component {
//   handleDelete = e => {
//     this.props.deleteAnime(e.target.id);
//     this.props.history.push("/myanime");
//   };
//   render() {
//     const anime = this.props.location.state.anime;

//     return (
//       <div>
//         <li>
//           <img src={anime.image_url} alt={`${anime.title}`} />
//           <h3>{anime.title}</h3>
//           <p>{anime.synopsis}</p>
//           <button id={anime.id} onClick={this.handleDelete}>
//             Remove from List
//           </button>
//           {/* <MyAnimeForm handleChange={handleChange} handleSubmit={handleSubmit} /> */}
//           {/* Write a MyAnimeReviews component  that renders the reviews for an anime */}
//         </li>
//       </div>
//     );
//   }
// }

// export default connect(null, { deleteAnime })(MyAnimeShow);