import React from "react";
import about from "../about.png";
import "../App.css";

const About = () => {
  return (
    <>
      <main id="main">
        <section id="about" class="about">
          <div class="container">
            <div class="section-title">
              <h2>
                <b>About Us</b>
              </h2>
            </div>

            <div class="row">
              <div class="col-lg-6 order-1 order-lg-2">
                <img src={about} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
                <h3>WHO ARE WE?</h3>
                <br />
                <p class="fst-italic">
                  The Floral NFTs are deployed using the smart contract ERC721.
                </p>
                <ul>
                  <li>
                    <i class="bi bi-check2-circle"></i> We create custom NFTs.
                  </li>
                  <li>
                    <i class="bi bi-check2-circle"></i> Authentic and Unique
                    NFTs.
                  </li>
                  <li>
                    <i class="bi bi-check2-circle"></i> Secure and Simple NFTs
                  </li>
                </ul>
                <p>
                We provide clients a responsive web portal that will let
                them buy our custom NFTs which are based on the floral design
                with a better, modern and easy UI and User Experience. My NFTs
                are secured using smart contracts based on ERC721. This site is
                built over ReactJS to make it fast, efficient and client-side
                rendered.
                Our Floral NFTs will be a new way of your digital investments. We guarantee you unique investments and secure transactions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" class="services section-bg">
          <div class="container">
            <div class="section-title">
              <p>
                We provide clients a responsive web portal that will let
                them buy our custom NFTs which are based on the floral design
                with a better, modern and easy UI and User Experience. My NFTs
                are secured using smart contracts based on ERC721. This site is
                built over ReactJS to make it fast, efficient and client-side
                rendered.
              </p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 icon-box">
                <div class="icon">
                  <i class="bi bi-cpu"></i>
                </div>
                <h4 class="title">
                  <a href="">Secure</a>
                </h4>
                <p class="description">
                  Secured using Smart Contract ERC721
                </p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box">
                <div class="icon">
                  <i class="bi bi-clipboard-data"></i>
                </div>
                <h4 class="title">
                  <a href="">Elegant</a>
                </h4>
                <p class="description">
                  Beautiful and Simple User Interface
                </p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box">
                <div class="icon">
                  <i class="bi bi-globe"></i>
                </div>
                <h4 class="title">
                  <a href="">Simple</a>
                </h4>
                <p class="description">
                  Easy User Experience
                </p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box">
                <div class="icon">
                  <i class="bi bi-images"></i>
                </div>
                <h4 class="title">
                  <a href="">Variety</a>
                </h4>
                <p class="description">
                  We have various operations to choose from
                </p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box">
                <div class="icon">
                  <i class="bi bi-sliders"></i>
                </div>
                <h4 class="title">
                  <a href="">Reasonable</a>
                </h4>
                <p class="description">
                  We keep reasonable cost
                </p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box">
                <div class="icon">
                  <i class="bi bi-building"></i>
                </div>
                <h4 class="title">
                  <a href="">Trending</a>
                </h4>
                <p class="description">
                  NFTs which are preferred by everyone 
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="call-to-action">
          <div class="container">
            <div class="text-center">
              <h3>Want to Invest?</h3>
              <p>
                You can visit our OpenSea collection named The Floral NFTs to check out our Floral NFT collection.
              </p>
              <a class="cta-btn" href="https://testnets.opensea.io/collection/fnft-lsyqo5vud8">
                Explore
              </a>
            </div>
          </div>
        </section>

        <section id="faq" class="faq section-bg">
          <div class="container">
            <div class="section-title">
              <h2>Frequently Asked Questions</h2>
            </div>

            <ul class="faq-list">
              <li>
                <div
                  data-bs-toggle="collapse"
                  class="collapsed question"
                  href="#faq1"
                >
                  What are Non Fungible Tokens?{" "}
                  <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                  <p>Why are NFTs so popular?</p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq2"
                  class="collapsed question"
                >
                  Do people actually buy NFTs?{" "}
                  <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                  <p></p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq3"
                  class="collapsed question"
                >
                  Why are NFTs so popular?
                  <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq3" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo.
                    Dignissim suspendisse in est ante in. Nunc vel risus commodo
                    viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                    bibendum est. Purus gravida quis blandit turpis cursus in
                  </p>
                  <p>What is Minting?</p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq4"
                  class="collapsed question"
                >
                  Why is NFT art so expensive?{" "}
                  <i class="bi bi-chevron-down icon-show"></i>
                  
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq4" class="collapse" data-bs-parent=".faq-list">
                  <p>What is OpenSea?</p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq5"
                  class="collapsed question"
                >
                  What is Minting? <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq5" class="collapse" data-bs-parent=".faq-list">
                  <p>
                  Minting is the process of creating or producing something. In blockchain, minting means, validating information, creating a new block and recording that information into the blockchain.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq6"
                  class="collapsed question"
                >
                  What is OpenSea?
                  <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq6" class="collapse" data-bs-parent=".faq-list">
                  <p>
                  OpenSea is the leading marketplace for non-fungible tokens. The platform lets users buy and sell NFTs on the secondary marketplace and also create their own NFT collections to sell on the primary marketplace. OpenSea marketplace is easy to navigate, with a filter feature to help you find the NFTs you need.
                  </p>
                </div>
              </li>

          
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
