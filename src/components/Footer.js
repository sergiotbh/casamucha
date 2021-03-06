import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import CasaMuchaLogoWhite from "../assets/images/casamucha_horizontal_white.svg";
import IconButton from './IconButton';
import { PhotoCaption } from './TextComponents';

const Footer = () => {
  return(
    <footer>
      <section className="relative h-96 bg-brown-500 bg-opacity-75 py-8 px-5 md:py-16 md:pl-32 md:pr-56">
        <img
          src={CasaMuchaLogoWhite}
          className="w-60 md:w-96"
          alt="Logo"
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
          {/* <FooterParagraph>Aviso de privacidad | Términos y Condiciones. Copyright © 2021</FooterParagraph> */}
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
      <section className='relative'>
        <StaticImage
          src="../assets/images/casamucha.jpg"
        />
        <PhotoCaption customStyle="absolute bottom-2 right-2 z-40">Ilustración: @licenciadodominguez</PhotoCaption>
      </section>
    </footer>
  )
}

const FooterParagraph = ({children, customStyles}) => (
  <p className={`text-lg text-white-default ${customStyles}`}>{children}</p>
)

export default Footer;