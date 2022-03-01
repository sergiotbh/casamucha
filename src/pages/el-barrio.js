import React, { useEffect } from 'react';
import { PageSubtitle, PageTitle, Paragraph, PhotoCaption } from '../components/TextComponents';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Aos from "aos";
import "aos/dist/aos.css";
import MapContainer from '../components/MapContainer';
// import AntituristaLogo from '../assets/images/antiturista-logo.svg';

const BarrioPage = ({data}) => {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])

  return(
    <Layout noHero>
      <section className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 md:ml-32 pt-20 px-4 md:px-0 md:pt-32">
        <section className="col-span-2 md:col-span-3">
          <PageTitle customStyle="my-10">Nuestro barrio es el corazón de Guadalajara.</PageTitle>
        </section>
        <section data-aos="fade-in" className="col-span-2 md:col-span-2 flex justify-center md:justify-end">
          <StaticImage
            src="../assets/images/barrio_1.jpg"
            width={397}
            height={250}
            quality={90}
          />
        </section>
        <section data-aos="fade-in" className="md:col-span-1 md:row-span-2 flex items-center justify-center">
          <StaticImage
            src="../assets/images/barrio_11.jpg"
            quality={90}
            width={222}
            height={364}
          />
        </section>
        <section data-aos="fade-in" className="flex items-center col-span-1 md:col-span-2">
          <Paragraph>
            Casa Mucha es parte de una comunidad que mezcla la calidez tapatía con las ideas contemporáneas y nos encanta presumirlo.
          </Paragraph>
        </section>
        <section data-aos="fade-in" className="flex col-span-2 md:col-span-3 md:justify-end">
          <StaticImage
            src="../assets/images/barrio_7.jpg"
            width={578}
            height={356}
            quality={90}
          />
        </section>
        <PhotoCaption customStyle="min-w-max w-full col-span-full text-right pr-4">Foto: @lipeloza</PhotoCaption>
      </section>
      <section className="flex justify-center mt-12">
        <PageSubtitle customStyle="mb-12 text-center">Aquí todo queda a pie</PageSubtitle>
      </section>
      <section className="grid md:grid-cols-2 md:gap-5 mx-4 md:mx-32">
        <section data-aos="fade-in" className="flex flex-col items-center md:col-span-1 md:items-end">
          <StaticImage
            src="../assets/images/barrio_4.jpg"
            width={578}
            height={356}
            quality={90}
            data-aos="fade-in"
          />
          <StaticImage
            src="../assets/images/barrio_6.jpg"
            width={481}
            height={356}
            quality={90}
            className="my-5 md:w-5/6"
            data-aos="fade-in"
          />
        </section>
        <section data-aos="fade-in" className="md:col-span-1">
          <StaticImage
            src="../assets/images/barrio_2.jpg"
            width={578}
            height={626}
            quality={90}
          />
        </section>
      </section>
        <PhotoCaption customStyle="min-w-max w-full col-span-full text-right pr-4">Foto: @lipeloza</PhotoCaption>
      {/* <section className="flex flex-col justify-center items-center mt-12">
        <PageSubtitle customStyle="mb-12 text-center w-3/4">A <b>Guadalajara</b> la queremos mucho,<br/> conoce más de todo lo que ofrece aquí:</PageSubtitle>
        <a aria-label="Antiturista" href="https://antiturista.com/" target="_blank" rel="noreferrer">
          <img
            src={AntituristaLogo}
            className="w-96 py-16"
          />
        </a>
      </section> */}
      <section className="flex flex-col justify-center items-center mt-12">
        <PageSubtitle customStyle="mb-8 text-center w-3/4">Aquí estamos:</PageSubtitle>
      </section>
      <section className="flex justify-center lg:my-8"
        style={{
          maxWidth: '100vw',
          overflowX: 'hidden'
        }}
      >
        <MapContainer/>
      </section>
    </Layout>
  )
}

export default BarrioPage;