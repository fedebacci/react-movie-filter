export default function MovieCard ({ movie }) {
    return (
        <div className="col">
            {/* <div className="card h-100"> */}
            <div className="card py-2 px-3 h-100">
                {/* <div className="card-header"> */}
                    {movie.title}
                {/* </div> */}
                {/* <div className="card-body">
                    {movie.genre}
                </div> */}
            </div>
        </div>
    );
};