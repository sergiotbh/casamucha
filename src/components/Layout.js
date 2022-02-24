import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';

const Layout = ({children, noHero}) => {
  const [offsetY, setOffsetY] = useState(window.pageYOffset)

  const handleScroll = () => setOffsetY(window.pageYOffset)
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll )

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return(
    <main className="bg-white-background">
      <Background
        offsetY={offsetY}
      />
      <Helmet>
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
    <div className="absolute top-0 w-full z-0" style={{height: '100%', maxWidth: '100vw'}}>
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