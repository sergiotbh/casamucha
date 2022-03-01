import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import { PhotoCaption } from './TextComponents';

const HeroBanner = ({images, logoOverlay, noOverlay, photoCaption}) => {

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
    <div className="relative h-screen">
      <GatsbyImage
        image={getImage(images[currentImage].node.childImageSharp)}
        fullWidth
        className="h-full"
      />
      <div
        className={`absolute top-0 z-40 flex justify-center items-center w-full h-screen bg-black ${noOverlay ? "bg-opacity-0" : "bg-opacity-40"}`}
      >
        {logoOverlay}
      </div>
      <PhotoCaption dark={!noOverlay} customStyle="absolute bottom-2 right-2">{photoCaption}</PhotoCaption>
    </div>
  )
}

export default HeroBanner;