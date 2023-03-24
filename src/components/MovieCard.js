import { useState, useEffect } from "react";
export default function MovieCard({title, year, img, genre, imdbID}){


    const movieIDLink = `https://www.omdbapi.com/?i=${imdbID}&apikey=df1a72d2`

    const [movieInfo, setMovieInfo] = useState([]);

    const getMovieInfo = async() => {
        const url = movieIDLink;
        const response = await fetch(url);
        const data = await response.json();
        setMovieInfo(data);
    }

        useEffect(() =>{
            getMovieInfo()
                })


    return(
        <article className="moviecard">
             <img className="moviePoster" src={img} alt={title}/>
             <section>
                <h2>{title}</h2>
                <p>{year}</p>
                <p>{genre}</p>

            </section>
           
          
        </article>
    )}

