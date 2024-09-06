import { createContext, useState } from "react";
import Header from "./components/Header";
import MenuList from "./components/MenuList";
import MovieGrid from "./components/MovieGrid";
import History from "./components/History";
import WatchingPage from "./components/WatchingPage";


export const MenuListContext = createContext(); // Create and export MenuListContext to be used in the MenuList component
export const SearchTextContext = createContext(); // SearchTextContext for the input search
export const HistoryContext = createContext(); // Creating a context(to be used in the history component) for opening the history
export const WatchingPageContext = createContext(); // Creating a context(to be used in the WatchingPage component) for opening the Watching page

function App() {

  const [isVisible, setIsVisible] = useState(false); // State to manage menu visibility. The menu is invisible in the initial render
  const [searchText, setSearchText] = useState(""); // State to manage input search text
  const [showHistory, setShowHistory] = useState(false); // State to manage the showing and hiding of history component
  const [watchingPage, setWatchingPage] = useState(false); // State to manage the showing and hiding of WatchingPage component

  return (
    <div className="relative">
      <MenuListContext.Provider value={{ isVisible, setIsVisible }}>
        <SearchTextContext.Provider value={{ searchText, setSearchText }}>
          <HistoryContext.Provider value={{ showHistory, setShowHistory }}>
            <WatchingPageContext.Provider value={{ watchingPage, setWatchingPage }}>
              <Header/>
              <MenuList/>
              <MovieGrid/>
              <History/>
              <WatchingPage/>
            </WatchingPageContext.Provider>
          </HistoryContext.Provider>
        </SearchTextContext.Provider>
      </MenuListContext.Provider>
    </div>
  )
}

export default App
