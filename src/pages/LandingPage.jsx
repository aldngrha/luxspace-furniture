import React from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import JustArrived from "../parts/LandingPage/JustArrived";
import BrowseRoom from "../parts/LandingPage/BrowseRoom";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
    </>
  );
}
