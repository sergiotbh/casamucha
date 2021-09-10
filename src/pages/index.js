import React from "react"
import Casamucha from "../assets/images/casamucha.jpg";
import Logo from "../assets/images/casamuchalogo.png";

export default function Home() {
  return (
    <main>
      <div class="relative m-auto flex flex-col justify-between bg-grayBackground"
        style={{
          minHeight: "150vh"
        }}
      >
        <div className="flex flex-col content-center items-center justify-center" style={{height: '100vh'}}>
          <img className="w-1/2" src={Logo}/>
          <h2 className="font-body mt-4 text-2xl text-gray-400">
            Guadalajara • Otoño 2021
          </h2>
        </div>
        <div
          className="w-screen h-screen bg-center bg-no-repeat bg-hero-pattern"
        />
      </div>
    </main>
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