export default function MovieCard({title, year, img}){
    return(
        <article className="moviecard">
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <p>Released:<span>{year}</span></p>
        </article>
    )}

