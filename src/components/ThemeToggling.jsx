import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { ThemeTogglingContext } from "../App";

function ThemeToggling() {
  // State to manage the theme (light or dark)
  const { isDarkMode, setIsDarkMode } = useContext(ThemeTogglingContext);

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Apply theme class to the document body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="right-[60px] sm:right-[64px] md:right-[68px] lg:right-[72px] xl:right-[76px] 2xl:right-[80px] top-[25%] absolute">
      <FontAwesomeIcon 
        onClick={toggleTheme}
        icon={isDarkMode ? faSun : faMoon}
        className="texl-2xl hover:bg-gray-200 p-3 xl:p-4 rounded-full cursor-pointer bg-white dark:bg-gray-950 text-gray-900 dark:text-white dark:hover:bg-gray-800 transition-all duration-[1000ms]"
      />
    </div>
  );
};

export default ThemeToggling;
