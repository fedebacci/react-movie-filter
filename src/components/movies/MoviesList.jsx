import MovieCard from "./MovieCard"

export default function MoviesList ({ movies }) {
    return (
        <div className="card shadow p-3">
            {
                movies.length > 0 ?
                    <div className="row row-cols-3 g-3">
                        {
                            movies.map((movie, index) => {
                                return (
                                    <MovieCard key={index} movie={movie} />
                                );
                            })
                        }
                    </div>
                :
                <div>
                    Nessun risultato
                </div>
            }
        </div>
    );
};