/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { SearchTextContext } from "../App";
import MovieCard from "./MovieCard";
import SkeletonLoader from "./CardSkeletonLoader";


function MovieGrid() {
    const { searchText } = useContext(SearchTextContext);
    const [ movies, setMovies ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [loadedImagesCount, setLoadedImagesCount] = useState();


    const apiKey = import.meta.env.VITE_THE_MOVIE_DATABASE_API_KEY;
    const baseUrl = 'https://api.themoviedb.org/3/search/movie';

    // Function to fetch latest movies
    const latestBaseUrl = 'https://api.themoviedb.org/3/movie/now_playing';
    const fetchLatestMovies = async () => {
        let allMovies = []; // Holds all movies

        // Fetch from pages 1 to 5 to get more movies
        for(let pageNum = 1; pageNum <= 5; pageNum++) {
            const randomPageNum = Math.floor(Math.random() * 200) + 1;
            const url = `${latestBaseUrl}?api_key=${apiKey}&page=${randomPageNum}`;

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const latestMovies = await response.json();

                // Combine the results
                allMovies = allMovies.concat(latestMovies.results);
                setMovies(allMovies);
            } catch (error) {
                console.error('Error occured fetching movies:', error);
            } 
        }
    };

    // Fetch latest movies on conponent mount
    useEffect(() => {
        fetchLatestMovies();
    }, []);

    // Async function to fetch movies from an API
    const fetchMovies = async (pageNum) => {
        if (searchText.trim() == "") return; // Do nothing when the search input is empty
        
        if (searchText) {
            // The loading animation(skeleton screen can be rendered here)
            setLoading(true); // Show the loading skeleton

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

    // Listen for the custom 'fetchMovies' event from searchBar submited searchText
    useEffect(() => {    
        // Function to fetch all pages
        const fetchAllPages = async () => {
            setMovies([]); // Clear previous search results
            for (let i = 1; i <= 50; i++) { // Example: Fetching pages from 1 to 2
                await fetchMovies(i);            
            }
        };
        // Add event listener for custom event 'fetchMovies'(Listens for the 'fetchMovies')
        window.addEventListener('fetchMovies', fetchAllPages);
    
        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('fetchMovies', fetchAllPages);
        };
    }, [searchText]);
    

    useEffect(() => {
        if (movies.length > 0) {
            setLoading(loadedImagesCount < movies.length); // Check if all images have been loaded
        }
    }, [loadedImagesCount, movies]);

    const handleImageLoad = () => {
        setLoadedImagesCount((prevCount) => prevCount + 1); // Increment the loaded images count
    };

    // Render skeleton screen loaders when loading
    if (loading) {
        return (
            <div style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }} className="grid gap-[5px] p-4 items-center pt-[100px] xl:pt-[130px]">
                {Array.from({ length: 6 }).map((_, index) => ( // Show 6 skeleton loaders
                    <SkeletonLoader key={index} />
                ))}
            </div>
        );
    }

    // Render the error message if and error occurred in fetching data
    if(error) return(<p className="text-red-600">Error fetching data</p>);

    // Function to filter out movies by poster_path and remove duplicates by id
    const uniqueMovies = Array.from(
        new Map(
            movies
                .filter(movie => movie.poster_path) // Filter movies with a valid poster path
                .map((movie) => [movie.id, movie]) // Create a map to remove duplicates by id
        ).values() // Extract unique movies from the map
    );
    // console.log(uniqueMovies);

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
                    movieData={movie} // Pass movieData prop to movieCard 
                    onImageLoad={handleImageLoad} // Pass the image load handler
                />
            ))
        ) : (
            <>
            </>
        )}
    </div>
  );
};

export default MovieGrid
