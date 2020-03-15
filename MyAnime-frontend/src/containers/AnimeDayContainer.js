import React from 'react'
import AnimeDay from '../components/AnimeDay'

const AnimeDayContainer = ({animeDays}) => {
  let days = Object.keys(animeDays);

  const daysList = days.map((day, i) => {
    return <AnimeDay key={i} day={day} anime={animeDays[day]} />;
  });
  
  return (
    <div>
      {daysList}
    </div>
  )
}

export default AnimeDayContainer