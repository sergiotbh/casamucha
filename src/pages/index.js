import { graphql } from "gatsby";
import React from "react"
import { Helmet } from "react-helmet";
import { Trans, useTranslation } from "react-i18next";
import Logo from "../assets/images/casamuchalogo.png";
import Layout from "../components/Layout";

export default function Home() {

  const { t } = useTranslation()

  return (
    <Layout>
      <h1><Trans>Gallery</Trans></h1>
      {/* <Helmet>
        <title>Casa Mucha</title>
      </Helmet>
      <main>
        <div class="relative m-auto flex flex-col justify-start min-h-screen bg-grayBackground"
          style={{height: '200vh'}}
        >
          <div
            className="absolute top-0 w-full h-full bg-top lg:bg-cover bg-hero-pattern"
          >
            <span id="whiteOverlay" className="w-full h-full absolute opacity-40 bg-white"></span>
          </div>
          <div className="relative flex flex-col mx-auto items-center justify-center h-screen">
            <img className="w-1/2 md:w-1/4" src={Logo} alt="Casa Mucha Logo"/>
            <h2 className="font-body mt-4 text-2xl text-gray-500">
              Guadalajara • Otoño 2021
            </h2>
          </div>
        </div>
      </main> */}
    </Layout>
  )
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;