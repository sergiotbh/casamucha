import { Link } from 'gatsby';
import React, { useState } from 'react';
import NavMenu from './NavMenu';
import CasaMuchaLogoBlack from "../assets/images/casamucha_horizontal_black.svg";
import BurgerIcon from "../assets/images/icon_burger_gray.svg";
import BurgerIconWhite from "../assets/images/icon_burger_white.svg";
import { isMobile } from 'react-device-detect';

const Header = ({isTransparent}) => {

  const [isMenuVisible, setIsMenuVisible] = useState(false)
  
  return(
    <nav 
      className={`transition-colors duration-500 ease-out ${isTransparent ? 'bg-transparent' : 'bg-white-background shadow'} flex flex-row justify-between py-7 px-5 md:px-32 w-screen fixed top-0 z-50`}
    >
      <Link className="w-6 md:w-12" to="/">
        <h1 className={`invisible font-bold text-sm md:text-base transition-colors ${isTransparent ? 'text-white-default' : 'text-black'}`}>Esp/Eng</h1>
      </Link>
      <Link to="/">
        <img
          src={CasaMuchaLogoBlack}
          width={isMobile ? 250 : 389}
          placeholder="none"
          className={`relative transition transform ${isTransparent ? 'opacity-0 translate-y-16' : 'opacity-100 translate-y-0'}`}
        />
      </Link>
      <button className="w-6 md:w-12"  aria-label="Open Nav Menu" onClick={() => setIsMenuVisible(!isMenuVisible)}>
        <img
          src={isTransparent ? BurgerIconWhite : BurgerIcon}
          width={isMobile ? 18 : 28}
          placeholder="none"
        />
      </button>
      <NavMenu onClose={() => setIsMenuVisible(false)} visible={isMenuVisible}/>
    </nav>
  )
}

export default Header;