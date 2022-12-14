import { useState } from "react";
import NavBar from "./components/NavBar";
import Layout from "./Layout";
export default function App() {
  return (
    <Layout title="Home page">
      <div>
        <h1 className="mt-8 text-white text-center">
          Welcome to Stars Character App
        </h1>
        <div>
          <span className="text-white text-center text-sm">
            This is a simple app that uses the Star Wars API to display
            characters and their information.
          </span>
        </div>
        <div>
          <span className="text-white text-center text-sm">
            This app was created using React, React Router, redux, localstorage
            and Tailwind CSS.
          </span>
        </div>

        <footer className="flex flex-row justify-center mt-8">
          <a href="https://github.com/menendezluis/starwars" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="bg-white rounded-full p-1 mr-4"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>{" "}
          </a>
          <a href="http://www.luismenendez.com" target="_blank">
            <svg width="24" height="24" viewBox="0 -19 256 256" version="1.1">
              <g>
                <path
                  d="M226.859029,160.159256 L140.550803,160.159256 C139.581048,160.159256 137.641537,160.159256 136.671782,161.129011 L71.6981731,212.526045 C70.7284178,213.4958 70.7284178,214.465556 71.6981731,215.435311 C71.6981731,216.405066 72.6679285,216.405066 73.6376838,216.405066 L227.828784,216.405066 C243.34487,216.405066 256.921445,202.828491 255.951689,186.342651 C254.981934,170.826565 241.405359,160.159256 226.859029,160.159256"
                  fill="#00C9DB"
                ></path>
                <path
                  d="M156.445093,106.017815 C155.475338,98.2597722 151.596316,90.5017294 145.777784,85.6529526 L45.8929833,6.13301401 C33.2861638,-3.56453948 15.8305675,-1.62502879 6.13301401,10.9817908 C-3.56453948,23.5886103 -1.62502879,41.0442066 10.9817908,50.7417601 L83.7134419,108.927081 L10.9817908,167.112402 C-1.62502879,176.809955 -3.56453948,194.265552 6.13301401,206.872371 C15.8305675,219.479191 33.2861638,221.418701 45.8929833,211.721148 L145.777784,130.261699 C152.566072,124.443167 156.445093,116.685124 156.445093,107.957326 L156.445093,106.017815"
                  fill="#0D55FF"
                ></path>
                <path
                  d="M255.951689,188.282161 C255.951689,203.798247 243.34487,216.405066 227.828784,216.405066 C212.312699,216.405066 199.705879,203.798247 199.705879,188.282161 C199.705879,172.766076 212.312699,160.159256 227.828784,160.159256 C243.34487,160.159256 255.951689,172.766076 255.951689,188.282161"
                  fill="#7000F2"
                ></path>
              </g>
            </svg>
          </a>
        </footer>
      </div>
    </Layout>
  );
}
