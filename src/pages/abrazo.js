import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import { PageTitle, Paragraph, PhotoCaption } from '.';
import HeroBanner from '../components/HeroBanner';
import Layout from '../components/Layout';
import Aos from "aos";
import "aos/dist/aos.css";

const AbrazoPage = ({data}) => {
  
  const [offsetY, setOffsetY] = useState(window.pageYOffset)

  const handleScroll = () => setOffsetY(window.pageYOffset)
  
  useEffect(() => {
    Aos.init({
      duration: 2000
    })

    window.addEventListener('scroll', handleScroll )

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  
  return(
    <Layout noHero>
      <section className='pt-14 md:pt-36'>
        <div className='flex h-48 justify-center items-center mb-11 md:mb-20'>
          <h1 className={`font-serif text-brown-300 text-4xl text-center md:text-6xl lg:text-7xl leading-tight tracking-wider`}>Abrazo</h1>
        </div>
        <section className='relative'>
          <div className="hidden lg:block">
            <HeroBanner
              images={data.abrazo.edges}
              noOverlay
              photoCaption="Foto: @elmonstruodemilcabezas"
            />
          </div>
          <div className="lg:hidden">
            <StaticImage
              src="../assets/images/abrazo/abrazo_4.JPG"
              width={400}
              height={600}
              layout="fullWidth"
            />
          </div>
          <div className="absolute -top-24 md:-top-32 z-0 flex w-screen lg:w-1/3 justify-center lg:pl-12">
            <StaticImage
              src="../assets/images/abrazo_special3.JPG"
              width={250}
              height={250}
              className="margin-auto rounded-full transform shadow-md"
              aspectRatio={1}
            />
          </div>
        </section>
      </section>
      <section className='flex grid lg:grid-cols-2 gap-6 px-8 md:px-16 py-12 md:py-16 lg:px-56 lg:py-24'>
        <Paragraph alignParagraph>
          Abrazo es una escultura que recibe y que invita al espectador a permanecer entre sus volúmenes.<br/><br/>
          La escultura ofrece un lugar a reuniones y actividades tanto públicas como privadas, en las que sus volúmenes puedan ser utilizados de manera activa.
        </Paragraph>
        <Paragraph alignParagraph>
          Abrazo es una escultura utilizable de Gabriel Rosas Alemán (México, 1983), diseñada especialmente para Casa Mucha con la finalidad de recibir una amplia variedad de actividades en un espacio abierto. 
        </Paragraph>
      </section>
      <section className="flex justify-center">
        <div className="relative mx-4">
          <StaticImage
            src="../assets/images/abrazo_vertical.JPG"
            width={619}
            height={928}
            className="rounded-t-full max-w-xs lg:max-w-full"
          />
          <div
            className="absolute margin-auto transform -top-24 md:-top-36 lg:-top-40 -right-4 md:-right-12 lg:-right-20 h-40 w-40 lg:h-64 lg:w-64"
            style={{
              transform: `translateY(${offsetY * 0.1}px)`
            }}
          >
            <StaticImage
              src="../assets/images/abrazo_special.JPG"
              width={250}
              height={250}
              aspectRatio={1}
              className="rounded-full shadow-md"
            />
          </div>
        </div>
      </section>
      <section data-aos="fade-down" className="pt-24 px-4 md:pl-16 lg:pt-36 lg:pl-32">
        <PageTitle>Gabriel Rosas Alemán</PageTitle>
        <section className="grid md:grid-cols-2 gap-6 pt-10">
          <section className="flex flex-col col-span-1 justify-center items-end">
            <Paragraph alignParagraph customStyle="lg:pr-20 mb-8 lg:mb-28">
              La producción artística de Gabriel Rosas Alemán (Ciudad de México, 1983) explora los medios de la escultura, pintura, performance y video para plantear diversas traducciones entre los planos intangible y concreto. Para ello, revisa problemáticas relacionadas con el arte moderno, tales como la centralidad del pensamiento sobre la forma, la atención al comportamiento de los materiales y la exploración de diversos mecanismos para la composición.
            </Paragraph>
            <StaticImage
              src="../assets/images/abrazo/abrazo_3.JPG"
              width={478}
              height={629}
              className="lg:h-629 lg:w-478"
            />
          </section>
          <section className="col-span-1">
            <StaticImage
              src="../assets/images/gabo_2.jpg"
              className="max-w-xl mb-8 lg:mb-14"
            />
            <StaticImage
              src="../assets/images/abrazo/abrazo_2.JPG"
              width={709}
              height={630}
            />
          </section>
          <PhotoCaption customStyle="min-w-max w-full col-span-full text-right pr-4">Foto: @elmonstruodemilcabezas</PhotoCaption>
        </section>
      </section>
      <section className="px-4 py-8 md:px-12 md:py-16 xl:px-96 xl:py-24">
        <Paragraph>
          En este proceso de traducción entre lenguajes y formatos, entre lo espacial y lo objetual, el cuerpo juega un rol central, ya sea como referente, mediador de las experiencias y materia para la creación de las obras. Ejemplos de lo anterior son proyectos como Performance para dos-canción de amor (Ladera Oeste, Guadalajara, 2017), que a través de un performance sobre el encuentro de dos personas devuelve la mirada sobre los objetos exhibidos y sobre el acto de la contemplación; y Casa serpiente (2018-2020), donde el espacio pictórico se vuelca al espacio físico.
        </Paragraph>
      </section>
    </Layout>
  )
}

export default AbrazoPage;

export const query = graphql`
  query{
    abrazo: allFile(filter: {relativeDirectory: {eq: "abrazo"}}) {
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