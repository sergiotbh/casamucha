import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect } from "react"
import HeroBanner from "../components/HeroBanner";
import Layout from "../components/Layout";
import Aos from "aos";
import "aos/dist/aos.css";
import {isMobile} from 'react-device-detect';
import MuchasLogo from '../assets/images/muchas_logo.svg'

const partners = [
  {
    name: "La Recepción",
  },
  {
    name: "Muchas",
    logo: MuchasLogo
  },
  {
    name: "Rin Tin Tin",
  },
  {
    name: "El Salón"
  },
  {
    name: "Abrazo"
  }
]

export default function Home({data}) {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])

  return (
    <Layout>
      <HeroBanner
        images={data.homeHeroPhotos.edges}
      />
      <PageTitle customStyle="md:ml-32 lg:max-w-3xl my-10 lg:my-14" >Casa Mucha<br/>es mucha casa.</PageTitle>
      <section className="grid md:grid-cols-7 md:gap-5">
        <div className="md:col-span-3 md:row-span-2" data-aos="fade-up">
          <StaticImage
            src="../assets/images/casa_mucha_home_graphic_01.jpg"
            width={609}
          />
        </div>
        <div className="flex flex-col justify-center md:col-span-4 px-6 py-11" data-aos="fade-up">
          <Paragraph customStyle="max-w-md mb-10">Somos una estancia y espacio creativo en el corazón de Guadalajara. Casa Mucha es el encuentro de barrios e ideas de nuestra ciudad, con puertas abiertas para todas las personas que buscan disfrutarla.</Paragraph>
          <Paragraph customStyle="max-w-md">En nuestra Casa, encontrarás un lugar para hospedarte, espacios comerciales dedicados a las artesanías y a los oficios, la nueva gastronomía local y experiencias creativas que nos motivan.</Paragraph>
        </div>
        <div className="md:col-span-2 m-auto md:m-0" data-aos="fade-in">
          <StaticImage
            src="../assets/images/casa_mucha_home_graphic_02.jpg"
            width={378}
            height={500}
          />
        </div>
        <div className="md:col-span-2 py-6" data-aos="fade-in">
          <StaticImage
            src="../assets/images/casa_mucha_home_graphic_03.jpg"
            width={443}
            height={409}
          />
        </div>
      </section>
      <section className="lg:mr-72 my-8 flex justify-center" 
        data-aos={isMobile ? "fade-in" : "fade-right"}
      >
        <StaticImage
          src="../assets/images/casa_mucha_home_square.jpg"
          width={225}
          height={225}
          className="margin-auto rounded-full transform lg:-translate-y-40 shadow-md"
          aspectRatio={1}
        />
      </section>
      <section className="flex flex-wrap justify-center items-center pt-16 px-10 lg:px-44 bg-brown-200 bg-opacity-15">
        {
          partners.map((v, i) => (
            <div key={i} className="lg:w-1/3 mb-11 px-3 items-center">
              {
              v.logo ? 
                <img
                  src={v.logo}
                /> :
                <h3 className="text-4xl leading-loose tracking-wide text-brown-200 font-serif text-center">{v.name}</h3>
              }
            </div>
          ))
        }
      </section>
    </Layout>
  )
}

const PageTitle = ({children, customStyle}) => (
  <h1 className={`font-serif text-brown-300 text-4xl text-center md:text-left lg:text-7xl leading-tight tracking-wider ${customStyle}`}>{children}</h1>
)

const Paragraph = ({children, customStyle}) => (
  <p
    className={`text-center md:text-left text-sm md:text-base text-brown-600 leading-relaxed tracking-wide ${customStyle}`}
  >
    {children}
  </p>
)

export const query = graphql`
  query{
    homeHeroPhotos: allFile(filter: {relativeDirectory: {eq: "homeHeroPhotos"}}) {
      edges {
        node {
          childImageSharp{
            gatsbyImageData(
              width: 2000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 90
            )
          }
      }
      }
    }
  }
`;
