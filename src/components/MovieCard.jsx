import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { WatchingPageContext } from '../App';


function MovieCard({ image, name, movieData, onImageLoad }) {
  const { setWatchingPage } = useContext(WatchingPageContext); //  Use setWatchingPage from the WatchingPageContext 
  const [isImageLoading, setIsImageLoading] = useState(true); // Track image loading state

  // Handle image load event 
  const handleImageLoad = () => {
    setIsImageLoading(false);
    onImageLoad(); // Notify the parent that the image has loaded
  }
  // Handle image error event
  const handleImageError = () => {
    setIsImageLoading(false); // Handle errors (like broken links) gracefully
    onImageLoad(); // Notify the parent component about the load completion
  };

  // Function to open the watching page with movie details
  const openWatchPage = () => {
    setWatchingPage(movieData); // Set the movie data in the WatchingPageContext
  };

  return (
    <div className='relative group'>
      <div className={`bg-green-200 shadow-md rounded-sm overflow-hidden h-[250px] z-0 ${isImageLoading ? 'animate-pulse' : ''}`}>
      {/* Movie poster */}
          <img 
              src={image}
              alt={name}
              onLoad={handleImageLoad}
              onError={handleImageError}
              className="w-full h-full object-cover"
          />
      </div>
      <div className='absolute bottom-0 left-0 right-0 top-0 z-15 opacity-0 bg-black group-hover:opacity-70 transition-all duration-[300ms] flex justify-center align-center'>
        <button onClick={openWatchPage} className='p-0'>
          <FontAwesomeIcon icon={faPlay} className='hover:text-white text-gray-400 font-semibold text-2xl cursor-pointer'/>
        </button>
      </div>
      <div className='absolute bottom-0 left-0 right-0 z-10 bg-black text-white py-1 font-bold text-center opacity-85'>
        <p>{name}</p>  
      </div>
    </div>
    
  );
};

// Props validation
MovieCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    movieData: PropTypes.object.isRequired,
    onImageLoad: PropTypes.func,
};

export default MovieCard
