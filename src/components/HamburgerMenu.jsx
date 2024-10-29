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
    <div className="absolute right-6 sm:right-7 lg:right-8 xl:right-8 2xl:right-9 top-[38%] flex justify-between align-center">
      <FontAwesomeIcon 
        icon={ faBars }
        onClick={handleMenuClick}
        className="text-xl font-extralight cursor-pointer"
    />
    </div>
  )
}

export default HamburgerMenu
