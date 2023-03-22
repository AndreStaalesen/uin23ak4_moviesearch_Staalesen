import './moviesearch.css'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { useEffect, useState } from 'react'

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('James Bond')

  const getMovies = async() => {
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&type=movie&apikey=df1a72d2`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Main movies={movies} setSearch={setSearch} getMovies={getMovies} />} />
      </Route>
    </Routes>
  );
}

export default App;
