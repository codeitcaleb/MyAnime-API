import React, { Component } from 'react'
import AnimeDayContainer from './AnimeDayContainer'

class AnimeCalendarContainer extends Component {
  state = {
    days: []
  }
  
  componentDidMount() {
    this.fetchAnimeByDay()
  }

  componentDidUpdate(prevState) {
    if (this.state.days === prevState.days) {
      return true
    }
  }
  
  fetchAnimeByDay = () => {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

    fetch(`https://api.jikan.moe/v3/schedule`)
    .then(response => response.json())
    .then(object => {
      // animeDays will be the props for the <AnimeDayContainer /> component
      const animeDays = days.map(day => {
        console.log(object[day])
        return object[day]
      })
      
      this.setState({
        days: animeDays
      })
    })
  }
  render() {
    return (
      <div>
        <AnimeDayContainer animeDays={this.state.days} />
      </div>
    );
  }
}

export default AnimeCalendarContainer