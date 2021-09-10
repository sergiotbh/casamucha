import React from "react"
import { Helmet } from "react-helmet";
import Logo from "../assets/images/casamuchalogo.png";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Casa Mucha</title>
      </Helmet>
      <main>
        <div class="relative m-auto flex flex-col justify-center min-h-screen bg-grayBackground"
        >
          <div
            className="absolute top-0 w-full h-full bg-top lg:bg-cover bg-hero-pattern"
          >
            <span id="whiteOverlay" className="w-full h-full absolute opacity-40 bg-white"></span>
          </div>
          <div className="relative flex flex-col mx-auto items-center justify-center h-1/2">
            <img className="w-1/2 md:w-1/4" src={Logo} alt="Casa Mucha Logo"/>
            <h2 className="font-body mt-4 text-2xl text-gray-500">
              Guadalajara • Otoño 2021
            </h2>
          </div>
        </div>
      </main>
    </div>
  )
}

// <!DOCTYPE html>
// <html>
// <head>
//   <title>CASAMUCHA</title>
//   <style>
//     body {
//       background-color: #f7f1e3;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//       height: 100vh;
//     }
//     h1, h3 {
//       font-family: Helvetica, sans-serif;
//       color: #227093;
//     }
//   </style>
// </head>
// <body>
//   <h1>CASAMUCHA</h1>
//   <h3>Guadalajara</h3>
//   <h3>Fall 2021</h3>
// </body>
// </html