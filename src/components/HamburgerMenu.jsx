import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MenuListContext } from "../App";


function HamburgerMenu() {
    // Use context to get visibility state(isVisible) and function to update it(setIsvisible)
    const { isVisible, setIsVisible } = useContext(MenuListContext);

    const handleMenuClick = () => {
        setIsVisible(!isVisible);
    }

  return (
    <div className="absolute right-4 sm:right-5 lg:right-6 xl:right-7 2xl:right-9 top-[35%] flex justify-between align-center">
      <FontAwesomeIcon 
        icon={ faBars }
        onClick={handleMenuClick}
        className="text-2xl cursor-pointer"
    />
    </div>
  )
}

export default HamburgerMenu
