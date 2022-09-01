import React from "react";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb/index";
import Hero from "../parts/Hero";
import Client from "../parts/Client";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

export default function Detail() {
  return (
    <>
      <Header />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/office-room", name: "Office Room" },
          { url: "/categories/office-room/products/chair", name: "Detail" },
        ]}
      />
      <Hero />
      <Client />
      <Sitemap />
      <Footer />
    </>
  );
}
