import { useContext } from "react";
import { WatchingPageContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';


function WatchingPage({ movie }) {
    const apiKey = '70030b36507f13c90e43c4f21156be7d';

    const { setWatchingPage } = useContext(WatchingPageContext); // Use the setWatchingPage setter function from the WatchingPageContext
    
    // Function to hide the Watching page
    const hideWatchingPage = () => {
        setWatchingPage(null);
    };

  if (!movie) return null;
    console.log(`The movie id is: ${movie.id}`);

    return (
        <div className="watching-page fixed top-0 bottom-0 left-0 right-0 bg-white z-55 transition-all duration-[700ms]">
          <div className="font-bold text-2xl p-1 flex justify-between">
            {/* The title of the movie to be added dynamically as per the played movie */}
            <h1>{movie.title}</h1>
            <button onClick={hideWatchingPage} className="">
                <FontAwesomeIcon icon={faClose} className="cursor-pointer py-[3px] px-[4px] border border-black hover:text-red-600"/>
            </button>
          </div>
          <div className="w-full h-[85%]">
            {/* The movie itself(video) with its controls */}
            <video controls className="w-full h-full">
              <source src={`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}&language=en-US`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="px-2">
            {/* To be populated dynamically */}
            <p>
                <span className="font-semibold">Genre: </span> 
                {movie.genre_ids.join(", ")}
            </p>
            <p> 
                <span className="font-semibold">Overview: </span> 
                {movie.overview}
            </p>
            <p><span className="font-semibold">Release date: </span> {movie.release_date}</p>
          </div>
        </div>
    );
  }

WatchingPage.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default WatchingPage;
