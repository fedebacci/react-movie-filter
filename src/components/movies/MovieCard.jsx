export default function MovieCard ({ movie }) {
    return (
        <div className="col">
            <div className="card py-2 px-3 h-100 shadow">
                {movie.title} <small>({movie.genre})</small>
            </div>
        </div>
    );
};