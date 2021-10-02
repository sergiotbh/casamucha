import { graphql, Link } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StaticImage } from "gatsby-plugin-image"

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
    <main className="fixed h-screen w-screen inset-0 z-50 bg-mediumBrown">
      <section className="flex flex-row justify-between py-7 px-32">
        <Link to="/"><h1>Esp/Eng</h1></Link>
        <Link to="/">
          <StaticImage
            src="../assets/images/casamucha_horizontal_black.svg"
            width={389}
          />
        </Link>
        <div onClick={onClose}>=</div>
      </section>
      <section className="flex justify-center">
        <ul className="inline-block">
        {
          menuLinks.map((v, i) => 
            <Link to={v.link}><li>{t(v.name)}</li></Link>
          )
        }
        </ul>
      </section>
    </main>
  )
}

export default NavMenu;