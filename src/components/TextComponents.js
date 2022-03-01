import React from "react";

export const PageTitle = ({children, customStyle}) => (
  <h1 className={`font-serif text-brown-300 text-4xl text-center md:text-left lg:text-7xl leading-tight tracking-wider ${customStyle}`}>{children}</h1>
)

export const PageSubtitle = ({children, customStyle}) => (
  <h2 className={`font-sans text-2xl lg:text-4xl tracking-normal leading-snug font-light text-brown-300 ${customStyle}`}>
    {children}
  </h2>
)

export const Paragraph = ({children, customStyle, alignParagraph}) => (
  <p
    className={`${alignParagraph ? 'text-left' : 'text-center'} text-sm md:text-base text-brown-600 font-light leading-loose tracking-wide ${customStyle}`}
  >
    {children}
  </p>
)

export const PhotoCaption = ({children, dark, customStyle}) => (
  <h6 className={`${customStyle} ${dark ? 'text-gray-300' : 'text-brown-600'} z-40 italic text-xs md:text-sm`}>{children}</h6>
)