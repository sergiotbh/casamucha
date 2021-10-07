import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}) => {

  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.pageYOffset)
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll )

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return(
    <main className="bg-white-background w-screen">
      <Background
        offsetY={offsetY}
      />
      <Helmet>
        <title>Casa Mucha</title>
      </Helmet>
      <Header
        isTransparent={offsetY === 0}
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
    <div className="absolute top-0 w-screen z-0" style={{minHeight: '200vh', maxWidth: '100vw'}}>
      <div className="absolute w-96 h-96 bg-texture-4 bg-contain bg-no-repeat opacity-70 top-40 -left-4"
        style={{
          transform: `translateY(${offsetY * 0.7}px)`
        }}
      />
      <div className="absolute w-56 h-56 bg-texture-1 bg-contain bg-no-repeat opacity-20 -top-36 left-20 lg:left-52"/>
      <div className="absolute w-56 h-56 bg-texture-2 bg-contain bg-no-repeat opacity-60 bottom-1/3 lg:bottom-1/2 right-20"
        style={{
          transform: `translateY(${offsetY * 0.6}px)`
        }}
      />
      <div className="absolute w-24 h-24 bg-texture-3 bg-contain bg-no-repeat opacity-90 bottom-1/3 lg:bottom-1/2 right-14"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`
        }}
      />
      <div className="absolute w-1/3 h-1/3 bg-texture-5 bg-contain bg-no-repeat opacity-30 bottom-48 -left-60"
        style={{
          transform: `translateY(${offsetY * 0.8}px)`
        }}
      />
    </div>
  )
}

export default Layout;