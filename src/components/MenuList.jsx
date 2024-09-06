import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef } from "react";
import { MenuListContext } from "../App";
import { HistoryContext } from "../App";



function MenuList() {
    // Use context to get visibility state(isVisible) and function to update it(setIsvisible)
    const { isVisible, setIsVisible } = useContext(MenuListContext);
    const { showHistory, setShowHistory } = useContext(HistoryContext); // Access showHistory state and setShowHistory function form HistoryContext

    // Create a reference to the MenuList element
    const menuRef = useRef();

    // Function to hide menu
    const hideMenuList = () => {
        setIsVisible(false); 
    };

    useEffect(() => {
        // Handler to check for clicks outside the menu
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                hideMenuList();
            }
        };

        // Add event listener when component mounts
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up the event listener when component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Function to open history
    const openHistory = () => {
        setShowHistory(!showHistory)
    };

  return (
    <div 
        ref={menuRef} 
        className={`fixed top-6 bottom-0 right-0 bg-gray-100 transition-all duration-[800ms] z-30
        ${isVisible ? 'opacity-100 w-[50%]' : 'opacity-0 w-[0%]'}`}
    >
        <FontAwesomeIcon 
            icon={faClose} 
            className="mt-1 ml-2 px-1 font-bold text-2xl border ring-1 ring-black cursor-pointer transition-all duration-[300ms] hover:text-red-600"
            onClick={hideMenuList}
        />
        <ul className="flex flex-col justify-center w-full gap-1 pt-5">
            <li 
                onClick={openHistory}
                className="w-full px-3 py-2 cursor-pointer transition-all duration-[400ms] hover:bg-gray-300 odd:bg-gray-400"
            >
                History
            </li>
            <li className="w-full px-3 py-2 cursor-pointer transition-all duration-[400ms] hover:bg-gray-200 even:bg-gray-300">Theme</li>
        </ul>
    </div>
  )
}

export default MenuList
