export default function MovieCard({title, year, img, genre, director, writer, actors, }){

    return(
        <article className="moviecard">
             <img className="moviePoster" src={img} alt={title}/>
             <section>
                <h2>{title}</h2>
                <p>Released in {year}</p>
                <p>Released in {director}</p>

                
            </section>
           
          
        </article>
    )}

