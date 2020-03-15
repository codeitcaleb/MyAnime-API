<div className="col s12 m6">
  <div className="card horizontal">
    <div className="card-image">
      <img src={anime.image_url} />>
    </div>
    <div className="card-stacked">
      <div className="card-content">
        <p>{anime.synopsis}</p>
      </div>
      <div className="card-action">{/* <a href="#">This is a link</a> */}</div>
    </div>
  </div>
</div>;

<Route
  exact
  path="/searchresults"
  render={props => <AnimeResults {...props} />}
/>;

   // console.log(this.props);
    // this.props.history.push({
    //   pathname: "/search
    // });

      {
        /* <Route
          exact
          path="/searchresults"
          render={props => <AnimeResults {...props} />}
        /> */
      }
      {
        /* ; */
      }

        {
          /* <Link
              to={{
                pathname: `/anime/${anime.mal_id}`,
                state: { anime }
              }} */
        }
        {
          /* > */
        }

         {
           /* </Link> */
         }

          // {
          //   this.props.myAnime.find(a => a.title === anime.title) ? (
          //     <button id={anime.id} onClick={this.handleDelete}>
          //       Remove from List
          //     </button>
          //   ) : (
          //     <button id={anime.id} onClick={this.handleAdd}>
          //       Add to List
          //     </button>
          //   );
          // }

            // handleAdd = anime => {
            //   this.props.addAnime(anime);
            //   this.props.history.push("/myanime");
            // };

            // handleDelete = e => {
            //   this.props.deleteAnime(e.target.id);
            //   this.props.history.push("/myanime");
            // };

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

{/* <button onClick={() => this.handleDelete(anime.id)}>Remove from List</button>; */}