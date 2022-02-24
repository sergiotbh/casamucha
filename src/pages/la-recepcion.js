import Aos from 'aos';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React, { useEffect } from 'react';
import { PageSubtitle, Paragraph } from '.';
import Layout from '../components/Layout';
import RecepcionLogo from '../assets/images/la_recepcion_logo.svg';
import Masonry from 'react-masonry-css'

const RecepcionPage = ({data}) => {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])

  return(
    <Layout noHero>
      <section className="px-12 pt-12 md:pl-16 lg:pl-32 md:pr-0 md:py-0">
        <section className="md:flex pt-24 md:pt-48">
          <section className="flex-grow md:flex md:flex-col justify-center mb-12 md:mb-0 mr-5">
            {/* <PageTitle customStyle="mb-4 lg:mb-9 md:text-left">La Recepción</PageTitle> */}
            <img
              src={RecepcionLogo}
              alt="Logo Recepcion"
            />
            <Paragraph customStyle="md:text-left md:max-w-md">En La Recepción puedes comprar arte y artículos utilitarios que reflejan la inspiración de Casa Mucha.</Paragraph>
          </section>
          <StaticImage
            src="../assets/images/recepcion_01.jpeg"
            width={709}
            height={500}
            />
        </section>
        <StaticImage
          src="../assets/images/recepcion_02.jpeg"
          width={709}
          height={500}
          className="mt-10 md:ml-24 md:-mt-10 md:w-1/2"
        />
      </section>
      <section className="flex justify-center mx-12 py-12">
        <PageSubtitle customStyle="text-center">Conoce más de nuestros productos aquí</PageSubtitle>
      </section>
      <Masonry
        breakpointCols={3}
        className="flex p-5 md:px-32 md:pt-0 md:pb-32"
      >
        {data.recepcionPhotos.edges.map((v, i) => (
            <div data-aos="fade-in" className={``} key={i}>
              <GatsbyImage
                image={getImage(v.node.childImageSharp)}
                className="m-5"
              />
            </div>
          )
        )}
      </Masonry>
    </Layout>
  )
}

export const query = graphql`
  query{
    recepcionPhotos: allFile(filter: {relativeDirectory: {eq: "recepcionPhotos"}}) {
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

export default RecepcionPage;