import MovieCard from "./MovieCard"
import Searchbox from "./Searchbox"

export default function Main({setSearch, getMovies, movies}){ 
    return(
        <>
        <Searchbox setSearch={setSearch} getMovies={getMovies} />
        <section className="frontpage">
            <h2>Movies</h2>
            {movies.map((movie, index) => (
                <MovieCard key={index} title={movie.Title} img={movie.Poster} year={movie.Year}/>           
                ))}
        </section>
        </>
    );
}
