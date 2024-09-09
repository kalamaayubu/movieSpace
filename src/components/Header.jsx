import SearchBar from './SearchBar';
import HamburgerMenu from './HamburgerMenu';
import Logo from '../assets/Logo1.png';
import darkLogo from '../assets/darkLogo.png';
import ThemeToggling from './ThemeToggling';
import { ThemeTogglingContext } from "../App";
import { useContext } from 'react';


function Header() {
  const { isDarkMode } = useContext(ThemeTogglingContext);

  return (
    <div className='z-20 w-screen h-[80px] xl:h-[100px] flex justify-evenly align-center px-2 shadow-lg fixed bg-white dark:bg-gray-950 dark:border-b-[1px] dark:border-gray-900 text-black dark:text-white transition-colors duration-[800ms]'>
      {/* Conditionally render dark or light logo according to the theme */}
      {isDarkMode ? 
        <img src={darkLogo} alt='Logo' className='transition-all duration-[900ms]'/> : 
        <img src={Logo} alt="Logo" className='transition-all duration-[900ms]'/>}
      <SearchBar/>
      <ThemeToggling/>
      <HamburgerMenu/>
    </div>
  )
}

export default Header
