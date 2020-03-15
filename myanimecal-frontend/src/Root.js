import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./App";
import MyAnime from './containers/MyAnimeContainer'
import AnimeCalendarContainer from "./containers/AnimeCalendarContainer";
import AnimeShow from "./components/AnimeShow";
import MyAnimeShow from "./components/MyAnimeShow"

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route exact path="/calendar" component={AnimeCalendarContainer} /> */}
        <Route exact path="/myanime" component={MyAnime} />
        <Route exact path="/myanime/:id" component={MyAnimeShow} />
        <Route exact path="/anime/:mal_id" component={AnimeShow} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;