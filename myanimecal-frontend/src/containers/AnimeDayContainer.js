import React from 'react'
import AnimeDay from '../components/AnimeDay'

const AnimeDayContainer = ({animeDays}) => {
  const daysList = animeDays.map(day => {
    return <AnimeDay anime={day} />;
  });

  return (
    <div>
      {daysList}
    </div>
  )
}

export default AnimeDayContainer