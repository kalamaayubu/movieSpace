import { createContext, useState } from "react";
import Header from "./components/Header";
import MenuList from "./components/MenuList";


export const MenuListContext = createContext(); // Create and export MenuListContext to be used in the MenuList component

function App() {

  const [isVisible, setIsVisible] = useState(false); // State to manage menu visibility. The menu is invisible in the initial render

  return (
    <>
      <MenuListContext.Provider value={{isVisible, setIsVisible}}>
        <Header/>
        <MenuList/>
      </MenuListContext.Provider>
    </>
  )
}

export default App
