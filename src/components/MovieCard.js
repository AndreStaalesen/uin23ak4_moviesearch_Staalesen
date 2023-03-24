export default function MovieCard({title, year, img, writer, director}){

    return(
        <article className="moviecard">
             <img className="moviePoster" src={img} alt={title}/>
             <section>
                <h2>{title}</h2>
                <p>{year}</p>
                <p>{writer}{director}</p>

            </section>
           
          
        </article>
    )}

