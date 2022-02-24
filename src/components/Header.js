import { Link } from 'gatsby';
import React, { useState } from 'react';
import NavMenu from './NavMenu';
import CasaMuchaLogoBlack from "../assets/images/casamucha_horizontal_black.svg";
import BurgerIcon from "../assets/images/icon_burger_gray.svg";
import BurgerIconWhite from "../assets/images/icon_burger_white.svg";

const Header = ({isTransparent, noHero}) => {

  const [isMenuVisible, setIsMenuVisible] = useState(false)
  
  return(
    <nav 
      className={`transition-colors duration-500 ease-out ${isTransparent ? 'bg-transparent' : 'bg-white-background shadow'} flex flex-row justify-between py-7 px-5 md:px-28 w-full fixed top-0 z-50`}
    >
      <Link className="w-6 md:w-12" to="/">
        <h1 className={`invisible font-bold text-sm md:text-base transition-colors ${!noHero && isTransparent ? 'text-white-default' : 'text-black'}`}>Esp/Eng</h1>
      </Link>
      <Link to="/">
        <img
          src={CasaMuchaLogoBlack}
          className={`w-60 md:w-96 relative transition transform ${!noHero && isTransparent ? 'opacity-0 translate-y-16' : 'opacity-100 translate-y-0'}`}
          placeholder="none"
          alt="Casa Mucha"
        />
      </Link>
      <button className="w-6 md:w-12"  aria-label="Open Nav Menu" onClick={() => setIsMenuVisible(!isMenuVisible)}>
        <img
          src={!noHero && isTransparent ? BurgerIconWhite : BurgerIcon}
          className="w-5 md:w-7"
          placeholder="none"
          alt="Casa Mucha"
        />
      </button>
      <NavMenu onClose={() => setIsMenuVisible(false)} visible={isMenuVisible}/>
    </nav>
  )
}

export default Header;