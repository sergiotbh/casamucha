import React, { useEffect } from "react"
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import HeroBanner from "../components/HeroBanner";
import Layout from "../components/Layout";
import Aos from "aos";
import "aos/dist/aos.css";
import MuchasLogo from '../assets/images/muchas_logo.svg'
import CasaMuchaLogoWhite from '../assets/images/casamucha_horizontal_white.svg';
import RecepcionLogo from '../assets/images/recepcion_logo.svg';
import SalonLogo from '../assets/images/salon_logo.svg';
import RinTinTinLogo from '../assets/images/rintintin_logo.svg'
import { PageTitle, Paragraph } from "../components/TextComponents";

function Home({data}) {

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
            height={500}
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
      <section className="flex flex-wrap justify-center md:justify-between items-center pt-16 py-11 px-14 xl:px-32 bg-brown-200 bg-opacity-15">
        <Link to="/la-recepcion" className=" lg:py-2 lg:px-4 px-10 py-12 items-center">
          <img
            src={RecepcionLogo}
            alt=""
            height={20}
            width={150}
          />
        </Link>
        <Link href="/muchas" className=" px-12 py-12 lg:px-2 lg:py-2 items-center">
          <img
            src={MuchasLogo}
            alt=""
            height={20}
            width={150}
          />
        </Link>
        <a href="https://www.instagram.com/caferintintin" target="_blank" rel="noreferrer" className="px-12 py-12 lg:px-2 lg:py-2 justify-center items-center">
          <img
            src={RinTinTinLogo}
            alt=""
            height={20}
            width={150}
          />
        </a>
        <a href="/el-salon" className="px-10 py-10 lg:px-4 lg:py-2 justify-center items-center">
          <img
            src={SalonLogo}
            alt=""
            height={20}
            width={105}
          />
        </a>
      </section>
    </Layout>
  )
}

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

export default Home;