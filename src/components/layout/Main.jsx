import { useEffect, useState } from "react"
import moviesData from "../../assets/js/data/data"

import MoviesList from "../movies/MoviesList"
import FilterBySelect from "../ui/FilterBySelect";
import FilterByInput from "../ui/FilterByInput";

import AddMovie from "../movies/AddMovie";



// ! NB: I GENERI NON CAMBIANO MAI, A MENO CHE IO PERMETTA LA CREAZIONE DI NUOVI GENERI QUANDO FACCIO CREARE UN NUOVO FILM (INVECE DI FAR SCEGLIERE UNO TRA QUELLI GIA PRESENTI)
const genres = [];
moviesData.forEach(movie => {
    if (!genres.includes(movie.genre)) genres.push(movie.genre);
});



const initialAddMovieData = {
    title: "",
    genre: ""
}



export default function Main () {

    const [movies, setMovies] = useState(moviesData);
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [filteredGenre, setFilteredGenre] = useState("all");
    const [filteredTitle, setFilteredTitle] = useState("");
    const [newMovieData, setNewMovieData] = useState(initialAddMovieData);



    useEffect(() => {
        if (filteredGenre === "all" && filteredTitle === "" ) return setFilteredMovies(movies);

        let newFilteredMovies = movies.filter(movie => filteredGenre === "all" ? movie : movie.genre === filteredGenre);
        newFilteredMovies = newFilteredMovies.filter(movie => movie.title.toLowerCase().includes(filteredTitle.toLowerCase()));

        setFilteredMovies(newFilteredMovies);
    }, [filteredGenre, filteredTitle, movies])



    const handleMovieDataChange = (e) =>{
        // console.debug("newMovieData", newMovieData);
        // console.debug("e.target.name", e.target.name);
        // console.debug("e.target.value", e.target.value);
        setNewMovieData({
            ...newMovieData,
            [e.target.name]: e.target.value
        })
    }
    const handleAddNewMovieSubmit = (e) => {
        e.preventDefault();
        // console.log("e.target", e.target);
        // console.log("e.target.value", e.target.value);
        // console.log("newMovieData", newMovieData);

        newMovieData.genre = newMovieData.genre === "" ? genres[0] : newMovieData.genre;

        if (newMovieData.title === "" || newMovieData.genre === "") return alert('Il nuovo film deve avere sia un titolo che un genere');
        
        setMovies([ ...movies, newMovieData]);
        // console.log(movies);
        // setFilteredMovies(movies);
        // console.log(filteredMovies);

        setNewMovieData(initialAddMovieData);
    }

    

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

                <AddMovie 
                    genres={genres}
                    handleSubmit={handleAddNewMovieSubmit}
                    handleInputChange={handleMovieDataChange}
                    movieData={newMovieData}
                />

            </div>
        </main>
    );
}