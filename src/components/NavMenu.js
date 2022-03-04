import { Link } from 'gatsby';
import React from 'react';
// import { useTranslation } from 'react-i18next';
import CasaMuchaLogoWhite from "../assets/images/casamucha_horizontal_white.svg";
import CloseIcon from "../assets/images/close_icon.svg";
import IconButton from './IconButton';

const menuLinks = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'El Barrio',
    link: '/el-barrio'
  },
  {
    name: 'Muchas',
    link: '/muchas'
  },
  {
    name: 'La Recepción',
    link: '/la-recepcion'
  },
  {
    name: 'Abrazo',
    link: '/abrazo'
  },
]

const NavMenu = ({visible, onClose}) => {

  // const { t } = useTranslation()

  return(
    <main className={`fixed h-screen w-screen inset-0 z-50 bg-brown-400 transition-opacity duration-300 bg-opacity-95 ${!visible ? 'invisible opacity-0' : 'visible opacity-100'}`}>
      <section className="flex justify-between items-center py-7 px-8 md:px-28">
        <Link className="w-6 md:w-8" to="/">
          <h1 className={`invisible font-bold text-sm md:text-base transition-colors text-white-default`}>Esp/Eng</h1>
        </Link>
        <Link to="/">
          <img
            src={CasaMuchaLogoWhite}
            placeholder="none"
            className={`relative xs:w-48 w-60 md:w-96`}
            alt="Casa Mucha"
          />
        </Link>
        <button className="xs:w-5 w-6 md:w-12 p-1"  aria-label="Open Nav Menu" onClick={() => onClose()}>
          <img
            src={CloseIcon}
            className="w-5 md:w-7"
            placeholder="none"
            alt="Close"
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