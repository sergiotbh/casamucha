import { Link } from 'gatsby';
import React, { useState } from 'react';
import NavMenu from './NavMenu';
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false)
  
  return(
    <nav className="flex flex-row justify-between py-7 px-32 sticky top-0 z-50 bg-white">
      <Link to="/"><h1 className="font-bold">Esp/Eng</h1></Link>
      <Link to="/">
        <StaticImage
          src="../assets/images/casamucha_horizontal_black.svg"
          width={389}
          placeholder="none"
        />
      </Link>
      <div onClick={() => setIsMenuVisible(!isMenuVisible)}>=</div>
      {isMenuVisible && <NavMenu onClose={() => setIsMenuVisible(false)}/>}
    </nav>
  )
}

export default Header;