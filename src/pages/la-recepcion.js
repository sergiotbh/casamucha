import Aos from 'aos';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React, { useEffect } from 'react';
import { PageSubtitle, Paragraph } from '../components/TextComponents';
import Layout from '../components/Layout';
import RecepcionLogo from '../assets/images/recepcion_logo.svg';
import Masonry from 'react-masonry-css'

const RecepcionPage = ({data}) => {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])

  return(
    <Layout noHero title="La Recepción" description="La Recepción es una tienda donde podrás encontrar arte y artículos utilitarios que reflejan la inspiración de Casa Mucha.">
      <section className="px-12 pt-12 md:pl-16 lg:pl-32 md:pr-0 md:py-0">
        <section className="md:flex pt-16 md:pt-28">
          <section className="flex-grow md:flex md:flex-col lg:justify-center items-center mb-12 md:mb-0 mr-5">
            <img
              src={RecepcionLogo}
              alt="Logo Recepcion"
              className="w-40 md:w-56 mb-8 mx-auto"
            />
            <Paragraph customStyle="md:max-w-md mb-10">
              La Recepción es una tienda donde podrás encontrar arte y artículos utilitarios que reflejan la inspiración de Casa Mucha.
              Donde nuestros artistas favoritos cuentan sus historias y tú te podrás llevar un pedacito de ellas.
            </Paragraph>
          </section>
          <StaticImage
            src="../assets/images/recepcion_01.jpg"
            width={709}
            height={450}
            />
        </section>
        <section className="grid md:grid-cols-5 md:flex-row items-center">
          <StaticImage
            src="../assets/images/recepcion_02.jpg"
            width={709}
            height={450}
            className="flex-grow mt-10 md:ml-18 md:-mt-5 xl:-mt-24 col-span-3"
          />
          <Paragraph customStyle="col-span-2 p-8 xl:py-0 lg:-mt-12 xl:-mt-24 lg:px-12">
            Nuestra recepción es el lugar donde podremos conocernos mejor y te daremos recomendaciones acerca 
            de lo que hay en el barrio para que te enamores de Guadalajara tanto como nosotros.
          </Paragraph>
        </section>
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
                className="m-1 md:m-2"
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