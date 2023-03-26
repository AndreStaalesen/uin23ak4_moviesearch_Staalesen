import { useState, useEffect } from "react";
import NoImagePlaceholder from './No-Image-Placeholder.svg.png';
export default function MovieCard({title, year, img, imdbID}){


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

    const imgUrl = img.startsWith('http') ? img : NoImagePlaceholder;
    return(
        <article className="moviecard">

                <img className="moviePoster" src={imgUrl} alt={title} />
                <section className="movieInfo">
                    <h2>{title}</h2>
                     <p className="p1">{year}</p>
                     <p className="p2">{movieInfo.Genre}</p>
                     <p className="p3">Directed by:  {movieInfo.Director}</p>
                     <p className="p4">Written by:  {movieInfo.Writer}</p>
                </section>
        </article>
    )}

