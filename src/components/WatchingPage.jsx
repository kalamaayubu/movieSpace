import { useContext, useEffect, useState } from "react";
import { WatchingPageContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import VideoSkeletonLoader from "./VideoSkeletonLoader";

function WatchingPage({ movie }) {
    const apiKey = import.meta.env.VITE_THE_MOVIE_DATABASE_API_KEY;
    const { setWatchingPage } = useContext(WatchingPageContext);
    const [videoUrl, setVideoUrl] = useState(null);

    // Function to hide the Watching page
    const hideWatchingPage = () => {
        setWatchingPage(null);
    };

    useEffect(() => {
        if (movie) {
            // Fetch the video data from the API
            fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}&language=en-US`)
                .then(response => response.json())
                .then(data => {
                    // Extract the key of the video from the response
                    const youtubeVideo = data.results.find(video => video.site === "YouTube");
                    if (youtubeVideo) {
                        // Construct the full YouTube URL
                        setVideoUrl(`https://www.youtube.com/embed/${youtubeVideo.key}`);
                    }
                })
                .catch(error => console.error("Failed to fetch video data:", error));
        }
    }, [movie, apiKey]);

    if (!movie) return null;
    
    return (
      <div>
        <div className="watching-page fixed h-screen top-0 bottom-0 left-0 right-0 bg-white z-55 dark:bg-gray-950 text-black dark:text-white transition-all duration-[700ms]">
          <div className="font-bold text-2xl p-1 flex justify-between">
            <h1>{movie.title}</h1>
            <button onClick={hideWatchingPage} className="">
                <FontAwesomeIcon icon={faClose} className="cursor-pointer py-[3px] px-[4px] border border-black hover:text-red-600 dark:border-white"/>
            </button>
          </div>
          <div className="w-full lg:w-[90%] h-[75%] px-2 ">
            {/* The video player (use iframe for YouTube) */}
            {videoUrl ? (
              <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                title={movie.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <VideoSkeletonLoader/>
            )}
          </div>
          <div className="pl-3 px-2 h-[10%]">
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
      </div>
    );
}

WatchingPage.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default WatchingPage;
