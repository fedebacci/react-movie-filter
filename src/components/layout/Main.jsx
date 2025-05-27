import { useEffect, useState } from "react"
import moviesData from "../../assets/js/data/data"

import MoviesList from "../movies/MoviesList"
import FilterBySelect from "../ui/FilterBySelect";
import FilterByInput from "../ui/FilterByInput";



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
    const [filteredTitle, setFilteredTitle] = useState("");
    // console.warn(filteredMovies);
    // console.debug(filteredGenre);




    useEffect(() => {
        // console.warn("filteredGenre", filteredGenre);
        // console.warn("filteredTitle", filteredTitle);

        if (filteredGenre === "all" && filteredTitle === "" ) return setFilteredMovies(moviesData);

        let newFilteredMovies = moviesData.filter(movie => filteredGenre === "all" ? movie : movie.genre === filteredGenre);
        // console.debug("newFilteredMovies 1", newFilteredMovies);
        
        newFilteredMovies = newFilteredMovies.filter(movie => movie.title.toLowerCase().includes(filteredTitle.toLowerCase()));
        // console.debug("newFilteredMovies 2", newFilteredMovies);

        setFilteredMovies(newFilteredMovies);
    }, [filteredGenre, filteredTitle])




    return (
        <main>


            <div className="container">

                <FilterBySelect 
                    filteredElement={filteredGenre} 
                    handleChange={(e) => {setFilteredGenre(e.target.value)}} 
                    possibleValues={genres}
                />
                <FilterByInput 
                    filteredElement={filteredTitle} 
                    handleChange={(e) => {setFilteredTitle(e.target.value)}}
                />


                <MoviesList 
                    movies={filteredMovies} 
                />

            </div>



        </main>
    );
}