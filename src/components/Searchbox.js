export default function MovieSearch({ setSearch, getMovies }) {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="search"
          placeholder="Search for a movie"
          onChange={handleSearch}
        />
        <button className="searchBTN" onClick={getMovies} type="submit">
            Search...
        </button>
      </form>
  )
}