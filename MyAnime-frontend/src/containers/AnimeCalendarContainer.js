import React, { Component } from 'react'
import AnimeDayContainer from './AnimeDayContainer'

class AnimeCalendarContainer extends Component {
  state = {
    "sunday": [],
    "monday": [],
    "tuesday": [],
    "wednesday": [],
    "thursday": [],
    "friday": [],
    "saturday": []
  };

  componentDidMount() {
    this.fetchAnimeByDay();
  }

  componentDidUpdate(prevState) {
    if (this.state.days === prevState.days) {
      return true;
    }
  }

  fetchAnimeByDay = () => {
    let days = Object.keys(this.state);
  
    fetch('https://api.jikan.moe/v3/schedule')
      .then(response => response.json())
      .then(object => {
        days.map(day => (
          this.setState({
            [day]: object[day]
          })
        ));
      });
  }

  render() {
    return (
      <div>
        <AnimeDayContainer animeDays={this.state} />
      </div>
    );
  }
}

export default AnimeCalendarContainer