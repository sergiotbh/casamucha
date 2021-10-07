import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import IgIcon from '../assets/images/ig_icon.svg';
import CasaMuchaLogoWhite from "../assets/images/casamucha_horizontal_white.svg";
import { isMobile } from 'react-device-detect';
import IconButton from './IconButton';

const Footer = () => {
  return(
    <footer>
      <section className="relative h-96 bg-brown-500 bg-opacity-75 py-8 px-5 md:py-16 md:pl-32 md:pr-56">
        <img
          src={CasaMuchaLogoWhite}
          width={isMobile ? 243 : 343}
        />
        <section className="md:flex py-14">
          <div className="pb-4 md:flex-grow">
            <FooterParagraph customStyles="">
              Juan Manuel 1168, Santa Teresita,<br/>44100 Guadalajara, Jal.
            </FooterParagraph>
          </div>
          <div className="md:flex-grow">
            <FooterParagraph customStyles="">
              hola@casamucha.mx
            </FooterParagraph>
            {/* <FooterParagraph>
              (+351) 968 369 732
            </FooterParagraph> */}
          </div>
        </section>
        <section className="flex justify-between">
          <FooterParagraph>Aviso de privacidad | Términos y Condiciones. Copyright © 2021</FooterParagraph>
          <section className="">
            <IconButton
              type="instagram"
            />
            {/* <img
              src="../assets/images/ig_icon.svg"
              width={343}
              height="auto"
            /> */}
          </section>
        </section>
      </section>
      <section>
        <StaticImage
          src="../assets/images/casamucha.jpg"
        />
      </section>
    </footer>
  )
}

const FooterParagraph = ({children, customStyles}) => (
  <p className={`text-lg text-white-default ${customStyles}`}>{children}</p>
)

export default Footer;