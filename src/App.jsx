import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import MenuList from "./components/MenuList";
import MovieGrid from "./components/MovieGrid";
import History from "./components/History";
import WatchingPage from "./components/WatchingPage";

// Creating and exporting contexts to use in another components
export const MenuListContext = createContext(); // Create and export MenuListContext to be used in the MenuList component
export const SearchTextContext = createContext(); // SearchTextContext for the input search
export const HistoryContext = createContext(); // Creating a context(to be used in the history component) for opening the history
export const WatchingPageContext = createContext(); // Creating a context(to be used in the WatchingPage component) for opening the Watching page
export const ThemeTogglingContext = createContext(); // Creating a context(to be used in the ThemeToggling component) for toggling theme

function App() {
  // State to manage theme (initailize based on user preferences or local storage)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  }); 

  // Sync theme with local storage
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);


  // Other states
  const [isVisible, setIsVisible] = useState(false); // State to manage menu visibility. The menu is invisible in the initial render
  const [searchText, setSearchText] = useState(""); // State to manage input search text
  const [showHistory, setShowHistory] = useState(false); // State to manage the showing and hiding of history component
  const [watchingPage, setWatchingPage] = useState(null); // state to store movie data

  return (
    <div className="relative bg-white dark:bg-gray-950 text-black dark:text-white transition-all duration-[800ms]">
      <MenuListContext.Provider value={{ isVisible, setIsVisible }}>
        <SearchTextContext.Provider value={{ searchText, setSearchText }}>
          <HistoryContext.Provider value={{ showHistory, setShowHistory }}>
            <WatchingPageContext.Provider value={{ watchingPage, setWatchingPage }}>
              <ThemeTogglingContext.Provider value={{ isDarkMode, setIsDarkMode }}>
                <Header/>
                <MenuList/>
                <MovieGrid/>
                <History/>
                {watchingPage && <WatchingPage movie={watchingPage}/>} {/* Conditionally render WatchingPage */}
              </ThemeTogglingContext.Provider>
            </WatchingPageContext.Provider>
          </HistoryContext.Provider>
        </SearchTextContext.Provider>
      </MenuListContext.Provider>
    </div>
  )
}

export default App
