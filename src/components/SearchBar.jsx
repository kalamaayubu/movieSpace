import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useRef, useState } from 'react';
import { SearchTextContext } from '../App';


function SearchBar() {
  const { searchText, setSearchText } = useContext(SearchTextContext); // using the context provider(SearchTextContext) to get and use the searchText state and its setter function
  const [searchInputIsVisible, setSearchInputIsVisible] = useState(false); // State to manage the visiblity of the search input

  // Create a reference to the input element
  const searchInputRef = useRef(null);

  // Focus the input element whenever it becomes visible
  useEffect(() => {
    searchInputRef.current.focus();
  }, [searchInputIsVisible]);

  // Function to toggle the visiblility of the search input
  const openSearchInput = (e) => {
    e.preventDefault();
    setSearchInputIsVisible((prev) => !prev); // Toggling the state between visible and invisible
  };

  // Function to handle searching
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={`m-auto flex items-center ${ searchInputIsVisible ? 'border border-gray-300 rounded-full' : ''}`} >
      <input 
        type="text" 
        ref={searchInputRef}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder='Search'
        // Dynamically change the visibility and transition classes
        className={`outline-none border-r m-1 py-1 px-4 ease-in-out bg-transparent dark:bg-transparent text-black dark:text-white transition-all duration-[800ms]
        ${ searchInputIsVisible ? 'opacity-100 w-40 ml-2 xl:w-60' : 'opacity-0 w-0'}`}
      /> 
      <button 
        type='submit'
        className='m-auto rounded-full outline-none border-none'
      >
        <FontAwesomeIcon 
          icon={ faSearch } 
          className=' font-bold xl:text-[1.1rem] opacity-80 hover:opacity-100 px-3 py-2 m-auto rounded-full text-black dark:text-white transition-all duration-[200ms]'
          onClick={openSearchInput}
        />
      </button>
    </form>
  )
}

export default SearchBar
