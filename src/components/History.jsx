import { useContext } from "react";
import { HistoryContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons/faRedo";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function History() {

    const { showHistory, setShowHistory } = useContext(HistoryContext); // Access the showHistory state from the History context

    // Function to hide history 
    const hideHistory = () => {
        setShowHistory(false);
    };

    if (showHistory) {
        return (
            <div className="z-40 fixed top-0 bottom-0 left-0 right-0 bg-black opacity-95 transition-all duration-[800ms]">
                <button onClick={hideHistory} className="p-0 absolute top-[5%] left-[2%] z-50">
                    <FontAwesomeIcon 
                        icon={faClose} 
                        className="text-white text-2xl py-[2px] px-[3px] lg:p-2 sm:p-1 font-bold border border-2-white hover:text-red-600"
                    />
                </button>
                <div 
                    className={`bg-transparent absolute top-[10%] bottom-[10%] left-[10%] z-50 rounded-sm transition-all duration-[800ms] opacity-100 overflow-y-auto dark:bg-transparent text-black dark:text-white
                    ${showHistory ? 'w-[80%]' : 'w-[0%] h-[0%]'}`}
                >
                    <h1 className="text-center bg-white font-semibold text-2xl pt-2 pb-4 underline z-50 fixed w-[80%] dark:bg-gray-950 text-black dark:text-white">History</h1>
                    <ul className="flex flex-col justify-center w-full gap-[1px] pt-5 mt-10 dark:bg-gray-950 text-black dark:text-white">
                        <li className="w-full flex justify-between align-center px-3 py-2 transition-all duration-[500ms] cursor-default group bg-white dark:bg-gray-800 text-black dark:text-white">
                            <FontAwesomeIcon icon={faRedo} className="cursor-pointer mt-1 opacity-0 hover:text-green-600 group-hover:opacity-100"/>
                             Lost phoenix 
                            <FontAwesomeIcon icon={faClose} className="cursor-pointer py-[3px] px-[4px] border border-black hover:text-red-600 opacity-0 group-hover:opacity-100"/>
                        </li>
                        <li className="w-full flex justify-between align-center px-3 py-2 transition-all duration-[500ms] cursor-default group bg-white dark:bg-gray-800 text-black dark:text-white">
                            <FontAwesomeIcon icon={faRedo} className="cursor-pointer mt-1 opacity-0 hover:text-green-600 group-hover:opacity-100"/>
                             The Matrix 
                            <FontAwesomeIcon icon={faClose} className="cursor-pointer py-[3px] px-[4px] border border-black hover:text-red-600 opacity-0 group-hover:opacity-100"/>
                        </li>
                        <li className="w-full flex justify-between align-center px-3 py-2 transition-all duration-[500ms] cursor-default group bg-white dark:bg-gray-800 text-black dark:text-white">
                            <FontAwesomeIcon icon={faRedo} className="cursor-pointer mt-1 opacity-0 hover:text-green-600 group-hover:opacity-100"/>
                             Bad Boys 
                            <FontAwesomeIcon icon={faClose} className="cursor-pointer py-[3px] px-[4px] border border-black hover:text-red-600 opacity-0 group-hover:opacity-100"/>
                        </li>
                        <li className="w-full flex justify-between align-center px-3 py-2 transition-all duration-[500ms] cursor-default group bg-white dark:bg-gray-800 text-black dark:text-white">
                            <FontAwesomeIcon icon={faRedo} className="cursor-pointer mt-1 opacity-0 hover:text-green-600 group-hover:opacity-100"/>
                             The Escape Plan
                            <FontAwesomeIcon icon={faClose} className="cursor-pointer py-[3px] px-[4px] border border-black hover:text-red-600 opacity-0 group-hover:opacity-100"/>
                        </li>
                        
                        {/* List of histories to be added here dynamically as per user's searches */}
                    </ul>
                </div>
            </div>
            
        );
    }
};

export default History
