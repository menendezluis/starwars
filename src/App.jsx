import { useState } from "react";
import NavBar from "./components/NavBar";
export default function App() {
  return (
    <div className="container mx-auto mb-8 px-8 bg-gray-900	">
      <NavBar />
      <h1 className="mt-8 text-white text-center text-3xl font-bold">
        StarWars Characters
      </h1>
    </div>
  );
}
