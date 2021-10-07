import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import CasaMuchaLogoWhite from '../assets/images/casamucha_horizontal_white.svg';
import { isMobile } from 'react-device-detect';

const HeroBanner = ({images}) => {

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      nextImage()
    }, 10000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const nextImage = () => {
    setCurrentImage(currentImage => currentImage >= images.length - 1 ? 0 : currentImage + 1)
  };

  return(
    <div className="relative w-screen h-screen">
      <GatsbyImage
        image={getImage(images[currentImage].node.childImageSharp)}
        fullWidth
        className="h-full"
      />
      <div
        className="absolute top-0 z-40 flex justify-center items-center w-screen h-screen bg-black bg-opacity-40"
      >
        <img
          src={CasaMuchaLogoWhite}
          width={isMobile ? 250 : 389}
        />
      </div>
    </div>
  )
}

export default HeroBanner;