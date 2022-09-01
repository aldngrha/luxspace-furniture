import React from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import JustArrived from "../parts/LandingPage/JustArrived";
import BrowseRoom from "../parts/LandingPage/BrowseRoom";
import Client from "../parts/Client";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Client />
      <Sitemap />
      <Footer />
    </>
  );
}
