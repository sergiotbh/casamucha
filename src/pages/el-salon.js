import { graphql } from 'gatsby';
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Layout from '../components/Layout';
import ElSalonLogoWhite from '../assets/images/el_salon_logo_white.svg'
import { PageSubtitle } from '../components/TextComponents';
import { StaticImage } from 'gatsby-plugin-image';

const SalonPage = ({data}) => {
  return(
    <Layout>
      <HeroBanner
        images={data.homeHeroPhotos.edges}
        logoOverlay={
          <img
            src={ElSalonLogoWhite}
            className="w-60 md:w-96"
            alt="Casa Mucha"
          />
        }
      />
      <section
        className="grid grid-cols-12 ml-32 gap-6 my-28"
      >
        <section
          className="flex flex-col items-end col-span-5"
        >
          <PageSubtitle
            customStyle="mb-24"
          >
            El Salón es un espacio para que las personas compartan sus saberes, oficios y creaciones.
          </PageSubtitle>
          <StaticImage
            src="../assets/images/muchas_07.jpg"
            width={478}
            height={629}
          />
        </section>
        <section
          className="col-span-7"
        >
          <StaticImage
            src="../assets/images/muchas_06.jpg"
            width={589}
            height={393}
            className="mb-12 shadow-lg"
          />
          <StaticImage
            src="../assets/images/muchas_05.jpg"
            width={709}
            height={629}
          />
        </section>
      </section>
    </Layout>
  )
}

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


export default SalonPage;