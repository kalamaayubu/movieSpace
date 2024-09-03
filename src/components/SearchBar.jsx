import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function SearchBar() {
  const [searchInput, setSearchInput] = useState(""); // State to manage changes of the search input
  const [searchInputIsVisible, setSearchInputIsVisible] = useState(false); // State to manage the visiblity of the search input

  // Function to toggle the visiblility of the search input
  const openSearchInput = (e) => {
    e.preventDefault();
    
    setSearchInputIsVisible((prev) => !prev); // Toggling the state between visible and invisible
  };

  return (
    <form className={`m-auto flex items-center ${ searchInputIsVisible ? 'border rounded-full' : ''}`} >
      <input 
        type="text" 
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder='Search'
        // Dynamically change the visibility and transition classes
        className={`outline-none border-r m-1 py-1 px-4 transition-all duration-500 ease-in-out ${ searchInputIsVisible ? 'opacity-100 w-40 ml-2 xl:w-60' : 'opacity-0 w-0'}`}
      /> 
      <button className='m-auto rounded-full outline-none border-none'>
        <FontAwesomeIcon 
          icon={ faSearch } 
          className='text-black font-bold xl:text-[1.1rem] opacity-60 hover:opacity-100 px-3 py-2 m-auto rounded-full'
          onClick={openSearchInput}
        />
      </button>
    </form>
  )
}

export default SearchBar
