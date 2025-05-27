export default function AddMovie ({ genres, handleSubmit, handleInputChange, movieData }) {
    return (
        <div className="card shadow p-3 my-3">
            <div className="row">
                <div className="col-12">
                    <h5 className="mb-3">
                        Aggiungi un film alla lista
                    </h5>
                    
                    

                    <form 
                        onSubmit={handleSubmit}

                        className="row g-3 row-cols-3"
                    >
                        <div className="col">
                            <label htmlFor="newMovieTitle" className="form-label">
                                Titolo
                            </label>
                            <input 
                                onChange={handleInputChange}
                                value={movieData.title}

                                name="title"
                                type="text" 
                                className="form-control" 
                                id="newMovieTitle" 
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="newMovieGenre" className="form-label">
                                Genere
                            </label>
                            <select 
                                onChange={handleInputChange}
                                value={movieData.genre}

                                name="genre"
                                id="newMovieGenre"
                                className="form-select" 
                                aria-label="Select for genre filter"
                            >
                                {
                                    genres.map((genre, index) => {
                                        return (
                                            index === 0
                                            ?
                                            <option defaultValue key={index} value={genre}>{genre}</option>
                                            :
                                            <option key={index} value={genre}>{genre}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div className="col d-flex align-items-end">
                            <button type="submit" className="btn btn-primary w-100">
                                Aggiungi
                            </button>
                        </div>
                    </form>



                </div>
            </div>
        </div>
    );
};