import { useEffect, useState } from "react"
import moviesData from "../../assets/js/data/data"

import MoviesList from "../movies/MoviesList"
import FilterBySelect from "../ui/FilterBySelect";



// ! NB: I GENERI NON CAMBIANO MAI, A MENO CHE IO PERMETTA LA CREAZIONE DI NUOVI GENERI QUANDO FACCIO CREARE UN NUOVO FILM (INVECE DI FAR SCEGLIERE UNO TRA QUELLI GIA PRESENTI)
const genres = [];
moviesData.forEach(movie => {
    if (!genres.includes(movie.genre)) genres.push(movie.genre);
});
// console.debug(genres);




export default function Main () {

    // console.debug(moviesData);
    const [filteredMovies, setFilteredMovies] = useState(moviesData);
    const [filteredGenre, setFilteredGenre] = useState("all");
    // console.warn(filteredMovies);
    // console.debug(filteredGenre);

    useEffect(() => {
        if (filteredGenre === "all") return setFilteredMovies(moviesData);

        const newFilteredMovies = moviesData.filter(movie => movie.genre === filteredGenre);
        // console.debug(filteredMovies);

        setFilteredMovies(newFilteredMovies);
    }, [filteredGenre])

    return (
        <main>


            <div className="container">

                <FilterBySelect 
                    filteredElement={filteredGenre} 
                    handleChange={(e) => {setFilteredGenre(e.target.value)}} 
                    possibleValues={genres}
                />


                <MoviesList 
                    movies={filteredMovies} 
                />

            </div>



        </main>
    );
}