import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';

const Layout = ({children, noHero, title, url, description}) => {
  const isBrowser = typeof window !== "undefined"

  const [offsetY, setOffsetY] = useState(isBrowser ? window.pageYOffset : 0)

  const handleScroll = () => setOffsetY(isBrowser ? window.pageYOffset : 0)
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll )

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        url
        title
        description
        image
      }
    }
  }
`);

  const defaults = data.site.siteMetadata;

  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
    image: defaults.image,
    url: url || defaults.url
  };

  return(
    <main className="bg-white-background">
      <Background
        offsetY={offsetY}
      />
      <Helmet>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <title>Casa Mucha</title>
      </Helmet>
      <Header
        isTransparent={offsetY === 0}
        noHero={noHero}
      />
      <div className="relative">
        {children}
      </div>
      <Footer/>
    </main>
  )
}

const Background = ({offsetY}) => {
  
  return (
    <div className="xs:hidden absolute top-0 w-full z-0" style={{height: '100%', maxWidth: '100vw'}}>
      <div className="absolute w-96 h-96 bg-texture-4 bg-contain bg-no-repeat opacity-70 top-40 -left-4"
        style={{
          transform: `translateY(${offsetY * 0.7}px)`
        }}
      />
      <div className="absolute w-56 h-56 bg-texture-1 bg-contain bg-no-repeat opacity-20 -top-36 left-20 lg:left-52"/>
      <div className="absolute w-56 h-56 bg-texture-2 bg-contain bg-no-repeat opacity-60 bottom-1/3 lg:bottom-1/4 right-20"
        style={{
          transform: `translateY(${offsetY * 0.6}px)`
        }}
      />
      <div className="absolute w-24 h-24 bg-texture-3 bg-contain bg-no-repeat opacity-90 bottom-1/3 lg:bottom-14 right-14"
        style={{
          transform: `translateY(${offsetY * 0.2}px)`
        }}
      />
      <div className="absolute w-1/3 h-1/3 bg-texture-5 bg-contain bg-no-repeat opacity-30 bottom-48 -left-60"
        style={{
          transform: `translateY(${offsetY * 0.8}px)`
        }}
      />
      <div className="absolute w-1/4 h-1/4 bg-texture-6 bg-contain bg-no-repeat opacity-10 bottom-48 right-10"
        style={{
          transform: `translateY(${offsetY * 0.8}px)`
        }}
      />
    </div>
  )
}

export default Layout;