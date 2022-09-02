import React from "react";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb/index";
import ProductDetail from "../parts/Details/ProductDetail";
import Suggestion from "../parts/Details/Suggestion";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

export default function Detail() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/office-room", name: "Office Room" },
          { url: "/categories/office-room/products/1", name: "Detail" },
        ]}
      />
      <ProductDetail />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  );
}
