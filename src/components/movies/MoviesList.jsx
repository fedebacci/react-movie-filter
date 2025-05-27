import MovieCard from "./MovieCard"

export default function MoviesList ({ movies }) {
    return (
        <div className="card shadow p-3">
            <div className="row row-cols-3 g-3">
                {
                    movies.map((movie, index) => {
                        return (
                            <MovieCard key={index} movie={movie} />
                        );
                    })
                }
            </div>
        </div>
    );
};