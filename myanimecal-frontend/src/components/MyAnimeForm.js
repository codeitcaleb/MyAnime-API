import React from 'react'
import { connect } from 'react-redux'
export const MyAnimeForm = ({handleChange, handleSubmit}) => {
  return (
    <div>
      <h2>Write A Review</h2>
      <form onSubmit={handleSubmit} >
        <textarea onChange={handleChange} required rows="5" cols="28" placeholder="Write a Review" />
        <br/>
        <input type="submit" />
      </form>
      
    </div>
  )
}

export default connect(null)(MyAnimeForm)