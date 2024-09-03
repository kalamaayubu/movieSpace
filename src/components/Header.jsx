import SearchBar from './SearchBar';
import HamburgerMenu from './HamburgerMenu';
import Logo from '../assets/Logo1.png';

function Header() {
  return (
    <div className='relative w-screen h-[80px] xl:h-[100px] flex justify-evenly align-center px-2 shadow-sm'>
      <img src={Logo} alt="Logo"/>
      <SearchBar/>
      <HamburgerMenu/>
    </div>
  )
}

export default Header
