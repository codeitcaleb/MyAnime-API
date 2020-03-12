import React from 'react'
import { connect } from 'react-redux'
export const MyAnimeForm = (props) => {
  return (
    <div>
      <h2>Write A Review</h2>
      <form onSubmit={} >
        <textarea required rows="5" cols="28" placeholder="Enter Post" />
        <button type="submit" />
      </form>
      <MyAnimeForm handleSubmit={} handleChange={}  />
    </div>
  )
}

export default connect(null)(MyAnimeForm)