import MoviesScore from "../MoviesScore";

function MoviesCard (){
const movies = {
    id: 1,
    image:
    "https://th.bing.com/th/id/OIP.AHpzYF6H-XiYy5sVr2225QHaKo?w=189&h=272&c=7&r=0&o=5&pid=1.7",
    title: "O gladiador",
    count: 2,
    score: 4.0,
};
    return(
        <div>
            <img className="movies-card-image" src={movies.image} alt={movies.title} />
            <div className="movies-card-bottom-container">
                <h3>
                    {movies.title}
                </h3>
                <MoviesScore />
                <div className="btn movies-btn">
                    Avaliar
                </div>
            </div>
        </div>
);

}

export default MoviesCard;