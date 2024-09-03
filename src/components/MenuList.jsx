import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef } from "react";
import { MenuListContext } from "../App";

function MenuList() {
    // Use context to get visibility state(isVisible) and function to update it(setIsvisible)
    const { isVisible, setIsVisible } = useContext(MenuListContext);

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
    }, [])

  return (
    <div 
        ref={menuRef} 
        className={`absolute top-3 bottom-0 right-0 bg-gray-100 transition-all duration-[900ms] 
        ${isVisible ? 'opacity-100 w-[50%]' : 'opacity-10 w-[0%]'}`}
    >
        <FontAwesomeIcon 
            icon={faClose} 
            className="mt-1 ml-2 font-bold text-2xl cursor-pointer hover:text-red-600"
            onClick={hideMenuList}
        />
        <ul className="flex flex-col justify-center items-center w-full">
            <li className="w-full px-2 py-1">History</li>
            <li className="w-full px-2 py-1">Theme</li>
        </ul>
    </div>
  )
}

export default MenuList
