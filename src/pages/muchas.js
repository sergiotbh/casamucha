import React, { useEffect } from 'react';
import { graphql } from "gatsby";
import HeroBanner from '../components/HeroBanner';
import Layout from '../components/Layout';
import MuchasLogoWhite from '../assets/images/muchas_logo_white.svg';
import { PageSubtitle, Paragraph } from '../components/TextComponents'
import Aos from "aos";
import "aos/dist/aos.css";
import { StaticImage } from 'gatsby-plugin-image';
import BackgroundImage from 'gatsby-background-image'

const MuchasPage = ({data}) => {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])

  return(
    <Layout>
      <HeroBanner
        images={data.muchasHero.edges}
        logoOverlay={
          <img
            src={MuchasLogoWhite}
            className="w-60 md:w-96"
            alt="Muchas Logo"
          />
        }
      />
      <section data-aos="fade-in" className="flex my-16 justify-center">
        <Paragraph customStyle="w-3/4 md:w-1/2 text-center">
          Es una marca colectiva de creaciones de personas que pertenecen a alguna de las comunidades que históricamente han sido juzgadas y amenazadas por el simple hecho de ser quienes son.  Conservamos la historia de sus obras y te invitamos a seguir escribiéndola. 
        </Paragraph>
      </section>
      <section data-aos="fade-up" className="py-12 md:pt-16 md:pb-20 px-12 md:px-36 bg-brown-200 bg-opacity-10 grid lg:grid-cols-3 gap-12 lg:gap-5 ">
        <section className="col-span-1">
          <StaticImage
            src="../assets/images/muchas_05.jpg"
            quality={75}
            alt="Dog"
            className="h-full"
          />
        </section>
        <section className="col-span-1 grid grid-cols-2 grid-rows-2 gap-5">
          <StaticImage
            src="../assets/images/muchas_02.jpg"
            alt="Dogs"
          />
          <StaticImage
            src="../assets/images/muchas_03.jpg"
            alt="Palma"
          />
          <StaticImage
            src="../assets/images/muchas_01.jpg"
            alt="Cesto"
          />
          <StaticImage
            src="../assets/images/muchas_04.jpg"
            alt="Dog"
          />
        </section>
        <section className="col-span-1 flex flex-col justify-center row-start-1">
          <PageSubtitle customStyle="text-center mb-4">PRODUCTOS DE NUESTROS ARTESANOS</PageSubtitle>
          <Paragraph>Desde obras de arte popular hasta artículos utilitarios que transforman cualquier espacio en tu Casa.</Paragraph>
        </section>
      </section>
      <section data-aos="fade-up" className="py-12 md:pt-16 md:pb-20 px-12 md:px-36 grid lg:grid-cols-3 gap-12 lg:gap-5">
        <section className="col-span-1 flex flex-col justify-center">
          <PageSubtitle customStyle="text-center mb-4">NUESTRAS MANOS</PageSubtitle>
          <Paragraph>Muchas es una labor conjunta entre artesanos y curadores, colaboramos de manera justa para que el beneficio sea de todos.</Paragraph>
        </section>
        <section className="col-span-1">
          <StaticImage
            src="../assets/images/muchas_08.jpg"
            quality={75}
            alt="Plato"
            className="h-full"
          />
        </section>
        <section className="col-span-1">
          <StaticImage
            src="../assets/images/muchas_06.jpg"
            quality={75}
            alt="Pineapple"
            className="h-full"
          />
        </section>
      </section>
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        fluid={data.muchasBackground.childImageSharp.fluid}
        preserveStackingContext
        alt="Muchas Bg"
        className="z-10 flex justify-center py-52 bg-black"
      >
        
        <div className="absolute bg-black w-full h-full top-0 opacity-40 z-10"/>
        <img
          src={MuchasLogoWhite}
          alt="Muchas Logo"
          className="z-20"
        />
      </BackgroundImage>
    </Layout>
  )
}


export const query = graphql`
  query{
    muchasHero: allFile(filter: {relativeDirectory: {eq: "muchasHero"}}) {
      edges {
        node {
          childImageSharp{
            gatsbyImageData(
              width: 2000
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
              quality: 90
            )
          }
      }
      }
    }
    muchasBackground: file(relativePath: { eq: "muchas_banner.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160, grayscale: true) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;


export default MuchasPage;