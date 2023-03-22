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
          type="search"
          placeholder="Search for a movie"
          onChange={handleSearch}
        />
        <button onClick={getMovies} type="submit">
            Search...
        </button>
      </form>
  )
}