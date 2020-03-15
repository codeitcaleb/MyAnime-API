import React from 'react'

const AnimeSearchBar = ({query, handleChange, handleSubmit}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default AnimeSearchBar