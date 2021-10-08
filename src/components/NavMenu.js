import { Link } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CasaMuchaLogoWhite from "../assets/images/casamucha_horizontal_white.svg";
import CloseIcon from "../assets/images/close_icon.svg";
import { isMobile } from 'react-device-detect';
import IconButton from './IconButton';

const menuLinks = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Gallery',
    link: '/'
  },
]

const NavMenu = ({visible, onClose}) => {

  const { t } = useTranslation()

  return(
    <main className={`fixed h-screen w-screen inset-0 z-50 bg-brown-400 transition-opacity duration-300 bg-opacity-95 ${!visible ? 'invisible opacity-0' : 'visible opacity-100'}`}>
      <section className="flex justify-between items-center py-7 px-5 md:px-32">
        <Link className="w-6 md:w-12" to="/">
          <h1 className={`invisible font-bold text-sm md:text-base transition-colors text-white-default`}>Esp/Eng</h1>
        </Link>
        <Link to="/">
          <img
            src={CasaMuchaLogoWhite}
            width={isMobile ? 250 : 389}
            placeholder="none"
            className={`relative`}
          />
        </Link>
        <button className="w-6 md:w-12"  aria-label="Open Nav Menu" onClick={() => onClose()}>
          <img
            src={CloseIcon}
            width={isMobile ? 18 : 28}
            placeholder="none"
          />
        </button>
      </section>
      <section className="flex flex-col justify-center items-center h-full -mt-20">
        <ul className="mb-6">
          {menuLinks.map((item, index) => (
            <Link key={index} to={item.link}>
              <li className="text-2xl leading-loose tracking-wide text-center text-white-default hover:text-brown-700 hover:underline">{item.name}</li>
            </Link>
          ))}
        </ul>
        <IconButton
          type="instagram"
        />
      </section>
    </main>
  )
}

export default NavMenu;