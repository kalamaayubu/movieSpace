import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { WatchingPageContext } from '../App';


function MovieCard({ image, name }) {
  const { watchingPage, setWatchingPage } = useContext(WatchingPageContext); //  Use watchingPage and setWatchingPage from the WatchingPageContext 

  // Function to open the watching page
  const openWatchPage = () => {
    setWatchingPage(!watchingPage);
  };

  return (
    <div className='relative group'>
      <div className="bg-green-200 shadow-md rounded-sm overflow-hidden object-cover h-[250px] z-0">
        {/* Movie poster */}
          <img 
              src={image}
              alt={name}
              className="w-full h-auto"
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
    name: PropTypes.string.isRequired
};

export default MovieCard
