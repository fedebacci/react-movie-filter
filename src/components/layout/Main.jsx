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



const initialNewMovieData = {
    title: "",
    genre: ""
}



export default function Main () {

    const [movies, setMovies] = useState(moviesData);
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [filteredGenre, setFilteredGenre] = useState("all");
    const [filteredTitle, setFilteredTitle] = useState("");
    const [newMovieData, setNewMovieData] = useState(initialNewMovieData);



    useEffect(() => {
        if (filteredGenre === "all" && filteredTitle === "" ) return setFilteredMovies(movies);

        let newFilteredMovies = movies.filter(movie => filteredGenre === "all" ? movie : movie.genre === filteredGenre);
        newFilteredMovies = newFilteredMovies.filter(movie => movie.title.toLowerCase().includes(filteredTitle.toLowerCase()));

        setFilteredMovies(newFilteredMovies);
    }, [filteredGenre, filteredTitle, movies])



    const handleNewMovieDataChange = (e) =>{
        setNewMovieData({
            ...newMovieData,
            [e.target.name]: e.target.value
        })
    }
    const handleAddNewMovieSubmit = (e) => {
        e.preventDefault();

        newMovieData.genre = newMovieData.genre === "" ? genres[0] : newMovieData.genre;
        if (newMovieData.title === "") return alert('Il nuovo film deve avere un titolo');
        
        setMovies([ ...movies, newMovieData]);
        setNewMovieData(initialNewMovieData);
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

                <AddMovie 
                    genres={genres}
                    handleSubmit={handleAddNewMovieSubmit}
                    handleInputChange={handleNewMovieDataChange}
                    movieData={newMovieData}
                />

                <MoviesList 
                    movies={filteredMovies} 
                />

            </div>
        </main>
    );
}