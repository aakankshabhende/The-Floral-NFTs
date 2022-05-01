import React from 'react'
import "../App.css";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
    <section id="hero">
    <div class="hero-container">
      <h1>The Floral NFT Collection</h1>
      <h2>A new approach for your Digital Investments!</h2>
      <a onClick={onClick} href="https://testnets.opensea.io/collection/fnft-lsyqo5vud8" class="btn-get-started">Explore</a>
      
             
    </div>
  </section>
  <About/>
  <Contact/>
    </>
  )
}

export default Home