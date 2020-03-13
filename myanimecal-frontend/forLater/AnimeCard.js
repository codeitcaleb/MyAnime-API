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