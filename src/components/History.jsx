import { useContext } from "react";
import { HistoryContext } from "../App";
import { SearchTextContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons/faRedo";
import { faClose } from "@fortawesome/free-solid-svg-icons";


function History() {
    // Using variables and functions from the HistoryContext and SearchTextContext
    const { showHistory, setShowHistory, searchHistory, setSearchHistory } = useContext(HistoryContext); 
    const { setSearchText } = useContext(SearchTextContext);

    // Function to hide history 
    const hideHistory = () => {
        setShowHistory(false);
    };

    // Function to handle reload
    const handleHistoryReload = (searchTerm) => {
        setShowHistory(false);  // Hide the history
        setSearchText(searchTerm); // Set the new search term (from the history)

        // Create and dispatch custom event to signal(fire) fetching movies
        const event = new Event('fetchMovies'); // Kinda like setting up a bell named (fetchMovie) that when rung the action(fetching movies) happens, 
        window.dispatchEvent(event); // dispatch the event for any code or component listening for the fetchMovies to get it(kinda like ringing a bell)
    }

    // Function to remove movie from the history
    const handleRemoveFromHistory = (index) => {
        // Remove item from history by index
        setSearchHistory((prevHistory) => prevHistory.filter((_, i) => i !== index));
    }

    if (showHistory) {
        return (
            <div className="z-40 fixed top-0 bottom-0 left-0 right-0 bg-black opacity-95 transition-all duration-[0ms]">
                <button onClick={hideHistory} className="p-0 absolute top-[5%] left-[2%] z-50">
                    <FontAwesomeIcon 
                        icon={faClose} 
                        className="text-white text-2xl py-[2px] px-[3px] lg:p-2 sm:p-1 font-bold border border-2-white hover:text-red-600"
                    />
                </button>
                <div 
                    className={`bg-transparent absolute top-[10%] bottom-[10%] left-[10%] z-50 rounded-sm transition-all duration-[0ms] opacity-100 overflow-y-auto dark:bg-transparent text-black dark:text-white
                    ${showHistory ? 'w-[80%]' : 'w-[0%] h-[0%]'}`}
                >
                    <h1 className="text-center bg-white font-semibold text-2xl pt-2 pb-4 underline z-50 fixed w-[80%] dark:bg-gray-950 text-black dark:text-white">History</h1>
                    <ul className="flex flex-col justify-center w-full gap-[1px] pt-5 mt-10 dark:bg-gray-950 text-black dark:text-white">
                        {searchHistory.length === 0 && 
                            <p className="text-center font-extralight text-4xl py-4 cursor-default group bg-white dark:bg-gray-800 text-black dark:text-white">There is no history</p>
                        }
                        {searchHistory.map((term, index) => (
                            <li key={index} className="w-full flex justify-between align-center px-3 py-2 transition-all duration-[0ms] cursor-default group bg-white dark:bg-gray-800 text-black dark:text-white">
                            <FontAwesomeIcon 
                                icon={faRedo} 
                                onClick={() => handleHistoryReload(term)}
                                className="cursor-pointer mt-1 opacity-0 hover:text-green-600 group-hover:opacity-100"
                            />
                             {term}
                            <FontAwesomeIcon 
                                icon={faClose} 
                                onClick={() => handleRemoveFromHistory(index)}
                                className="cursor-pointer py-[3px] px-[4px] border border-black hover:text-red-600 opacity-0 group-hover:opacity-100"
                            />
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        );
    }
};

export default History
