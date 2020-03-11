import React, { Component } from 'react'
import AnimeDayContainer from './AnimeDayContainer'

class AnimeCalendarContainer extends Component {
  state = {
    // days: [],
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
  
    fetch(`https://api.jikan.moe/v3/schedule`)
      .then(response => response.json())
      .then(object => {
        // animeDays will be the props for the <AnimeDayContainer /> component
        days.map(day => {
          console.log(object[day]);
          this.setState({
            [day]: object[day]
          })
        });
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