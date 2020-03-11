import React from 'react'
import AnimeDay from '../components/AnimeDay'

const AnimeDayContainer = ({animeDays}) => {
  let days = Object.keys(animeDays);

  const daysList = days.map(day => {
    return <AnimeDay day={day} anime={animeDays[day]} />;
  });
  
  return (
    <div>
      {daysList}
    </div>
  )
}

export default AnimeDayContainer