import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect } from "react"
import HeroBanner from "../components/HeroBanner";
import Layout from "../components/Layout";
import Aos from "aos";
import "aos/dist/aos.css";
import MuchasLogo from '../assets/images/muchas_logo.svg'
import CasaMuchaLogoWhite from '../assets/images/casamucha_horizontal_white.svg';
import RecepcionLogo from '../assets/images/la_recepcion_logo.svg';
import SalonLogo from '../assets/images/el_salon_logo.svg';
import RinTinTinLogo from '../assets/images/rintintin_logo.svg'

const partners = [
  {
    name: "La Recepción",
    logo: RecepcionLogo,
    link: "/la-recepcion"
  },
  {
    name: "Muchas",
    logo: MuchasLogo,
    link: "/muchas"
  },
  {
    name: "Rin Tin Tin",
    logo: RinTinTinLogo,
    link: "https://www.instagram.com/caferintintin"
  },
  {
    name: "El Salón",
    logo: SalonLogo,
  },
  {
    name: "Abrazo",
    link: "/abrazo"
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
        logoOverlay={
          <img
            src={CasaMuchaLogoWhite}
            className="w-60 md:w-96"
            alt="Casa Mucha"
          />
        }
        photoCaption="Foto: @diegocerda.m"
      />
      <PageTitle customStyle="md:ml-32 lg:max-w-3xl my-10 lg:my-14" >Casa Mucha<br/>es mucha casa.</PageTitle>
      <section className="grid md:grid-cols-7 md:gap-5 overflow-hidden">
        <div className="md:col-span-3 md:row-span-2" data-aos="fade-right">
          <StaticImage
            src="../assets/images/casa_mucha_home_graphic_01.jpg"
            width={609}
          />
        </div>
        <div className="flex flex-col justify-center md:col-span-4 px-6 py-11" data-aos="fade-right">
          <Paragraph customStyle="max-w-md mb-10">Somos una estancia y espacio creativo en el corazón de Guadalajara. Casa Mucha es el encuentro de barrios e ideas de nuestra ciudad, con puertas abiertas para todas las personas que buscan disfrutarla.</Paragraph>
          <Paragraph customStyle="max-w-md">En nuestra Casa, encontrarás un lugar para hospedarte, espacios comerciales dedicados a las artesanías y a los oficios, la nueva gastronomía local y experiencias creativas que nos motivan.</Paragraph>
        </div>
        <div className="md:col-span-2 m-auto md:m-0" data-aos="fade-left">
          <StaticImage
            src="../assets/images/casa_mucha_home_graphic_02.jpg"
            width={378}
            height={500}
          />
        </div>
        <div className="md:col-span-2 py-6" data-aos="fade-left">
          <StaticImage
            src="../assets/images/casa_mucha_home_graphic_03.jpg"
            width={443}
            height={409}
          />
        </div>
      </section>
      <section className="lg:mr-72 my-8 flex justify-center" 
        data-aos="fade-right"
      >
        <StaticImage
          src="../assets/images/casa_mucha_home_square.jpg"
          width={225}
          height={225}
          className="margin-auto rounded-full transform lg:-translate-y-40 shadow-md"
          aspectRatio={1}
        />
      </section>
      <section className="flex flex-wrap justify-center items-center pt-16 px-10 lg:px-44 py-11 bg-brown-200 bg-opacity-15">
        {
          partners.map((v, i) => v.link && v.link.includes('http') ? (
            <a href={v.link} target='_blank' key={i} className="w-full md:w-1/2 lg:w-1/3 px-3 items-center">
              {
              v.logo ? 
                <img
                  src={v.logo}
                  alt=""
                /> :
                <h3 className="text-6xl leading-loose tracking-wide text-brown-500 font-serif text-center">{v.name}</h3>
              }
            </a>
          ) : (
            <Link to={v.link} className="w-full md:w-1/2 lg:w-1/3 px-3 items-center">
              {
              v.logo ? 
                <img
                  src={v.logo}
                  alt=""
                /> :
                <h3 className="text-6xl leading-loose tracking-wide text-brown-500 font-serif text-center">{v.name}</h3>
              }
            </Link>
          ))
        }
      </section>
    </Layout>
  )
}

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

export const query = graphql`
  query{
    homeHeroPhotos: allFile(
      filter: {relativeDirectory: {eq: "homeHeroPhotos"}}
      sort: { fields: absolutePath, order: ASC }
    ) {
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
