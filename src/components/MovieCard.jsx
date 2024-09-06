import PropTypes from 'prop-types';

function MovieCard({ image, name }) {
  return (
    <div className='relative'>
      <div className="bg-green-200 shadow-md rounded-sm overflow-hidden object-cover h-[250px] z-0">
        {/* Movie poster */}
          <img 
              src={image}
              alt={name}
              className="w-full h-auto"
          />
      </div>
      <div 
        className='absolute bottom-0 left-0 right-0 z-10 bg-black text-white py-1 font-bold text-center opacity-85'
      >
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
