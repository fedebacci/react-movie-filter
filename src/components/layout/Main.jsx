import { useState } from "react"
import movies from "../../assets/js/data/data"



// ! NB: I GENERI NON CAMBIANO MAI, A MENO CHE IO PERMETTA LA CREAZIONE DI NUOVI GENERI QUANDO FACCIO CREARE UN NUOVO FILM (INVECE DI FAR SCEGLIERE UNO TRA QUELLI GIA PRESENTI)
const genres = [];
movies.forEach(movie => {
    if (!genres.includes(movie.genre)) genres.push(movie.genre);
});
// console.debug(genres);




export default function Main () {

    // console.debug(movies);
    const [filteredGenre, setFilteredGenre] = useState("all")

    return (
        <main>


            <div className="container">

                <div className="card shadow p-3 my-5">
                    <div className="row">
                        <div className="col-12">
                            <h2>Filtra per genere</h2>
                            <select 
                                value={filteredGenre}
                                onChange={(e) => {
                                    console.debug("Setto genere per filtro:", e.target.value)
                                    setFilteredGenre(e.target.value)}
                                }

                                className="form-select" 
                                aria-label="Select for genre filter"
                            >
                                <option defaultValue value="all">Tutti</option>

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

                                    filteredGenre === "all" ?
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
                                    :
                                    (
                                        movie.genre === filteredGenre 
                                        &&
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
                                    )

                                );
                            })
                        }
                    </div>
                </div>
            </div>



        </main>
    );
}