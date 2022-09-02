import React from "react";
import Header from "../parts/Header";
import Hero from "../parts/LandingPage/Hero";
import JustArrived from "../parts/LandingPage/JustArrived";
import BrowseRoom from "../parts/LandingPage/BrowseRoom";
import Client from "../parts/Client";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";
import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useModalDOM from "../helpers/hooks/useModalDOM";

export default function LandingPage() {
  useScrollAnchor();
  useModalDOM();
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Client />
      <Sitemap />
      <Footer />
    </>
  );
}
