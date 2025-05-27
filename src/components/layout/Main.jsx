import movies from "../../assets/js/data/data"

export default function Main () {

    // console.debug(movies);
    const genres = [];
    movies.forEach(movie => {
        if (!genres.includes(movie.genre)) genres.push(movie.genre);
    });
    console.debug(genres);

    return (
        <main>


            <div className="container">

                <div className="card shadow p-3 my-5">
                    <div className="row">
                        <div className="col-12">
                            <h2>Filtra per genere</h2>
                            <select className="form-select" aria-label="Select for genre filter">
                                <option selected>Tutti</option>

                                {
                                    genres.map((genre, index) => {
                                        return (
                                            <option key={index} value={genre}>{genre}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>



                <div className="card shadow p-3">
                    <div className="row row-cols-3 g-3">
                        {
                            movies.map((movie, index) => {
                                return (
                                    <div key={index} className="col">
                                        <div className="card h-100">
                                            <div className="card-header">
                                                {movie.title}
                                            </div>
                                            <div className="card-body">
                                                {movie.genre}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>



        </main>
    );
}