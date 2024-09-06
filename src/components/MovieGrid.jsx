/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { SearchTextContext } from "../App";
import MovieCard from "./MovieCard";



function MovieGrid() {
    const { searchText } = useContext(SearchTextContext);
    const [ movies, setMovies ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    
    const apiKey = '70030b36507f13c90e43c4f21156be7d';
    const baseUrl = 'https://api.themoviedb.org/3/search/movie';
    // Async function to fetch movies from an API
    const fetchMovies = async (pageNum) => {
        if (searchText.trim() == "") return; // Do nothing when the search input is empty
        
        if (searchText) {
            // The loading animation(skeleton screen can be rendered here)
            setLoading(true); // Loading ui as data is fetched from the API

            try {
                const url = `${baseUrl}?api_key=${apiKey}&query=${searchText}&page=${pageNum}`;
                const response = await fetch(url);  // Perform the API request to fetch the movies
                if (!response.ok) throw new Error ('Network response was not okay')
                    
                const data = await response.json();
                
                setMovies((prevMovies) => [...prevMovies, ...data.results]);

            } catch (error) {
                setError(error);
                console.error('An error occurred', error);
            } finally {
                setLoading(false);
            }
        };
    };

    // useEffect hook to conduct a search every time the search text changes
    useEffect(() => {
        setMovies([]); // Clear the UI when a request is made
        const fetchAllPages = async () => {
            for (let i = 1; i <= 1; i++) {
                await fetchMovies(i);            
            }
        };
        fetchAllPages();
    }, [searchText]);

    // Render based on state 
    if(loading) return(<p className="text-green-600">Loading...</p>);
    if(error) return(<p className="text-red-600">Error fetching data</p>);

    // Function to filter out movies by poster_path and remove duplicates by id
    const uniqueMovies = Array.from(
        new Map(
            movies
                .filter(movie => movie.poster_path) // Filter movies with a valid poster path
                .map((movie) => [movie.id, movie]) // Create a map to remove duplicates by id
        ).values()
    );

    // Image baseUrl for fetching movie images(posters)
    const imageBaseUrl =`https://image.tmdb.org/t/p/w500`;
  return (
    <div style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'}} className="grid gap-[5px] p-4 items-center pt-[100px] xl:pt-[130px]">
        {/* Conditionally render the movie card if there is any search result */}
        {uniqueMovies.length > 0 ? (
            uniqueMovies.map(movie => (
                <MovieCard
                    key={movie.id}
                    image={`${imageBaseUrl}${movie.poster_path}`}
                    name={movie.title}
                />
            ))
        ) : (
            <>
                <p className="font-extrabold text-[25px] sm:text-[34px] text-center">No result found for your search.</p>
                <p className="font-semibold text-[20px] sm:text-[22px] text-center">Please try another search term.</p>
            </>
        )}
    </div>
  );
};

export default MovieGrid
