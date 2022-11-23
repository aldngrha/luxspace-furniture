import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb/index";

import ProductDetail from "../parts/Details/ProductDetail";
import Suggestion from "../parts/Details/Suggestion";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

import useAsync from "../helpers/hooks/useAsync";
import fetch from "../helpers/fetch";

export default function Detail() {
  const { idp } = useParams();
  const { data, run, isLoading } = useAsync();

  React.useEffect(() => {
    run(fetch({ url: `/api/products/${idp}` }));
  }, [run]);

  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/1231", name: "Office Room" },
          { url: "/categories/1231/products/1", name: "Detail" },
        ]}
      />
      {isLoading ? "Loading" : <ProductDetail data={data} />}

      {isLoading ? (
        "Loading"
      ) : (
        <Suggestion data={data?.relatedProducts || {}} />
      )}
      <Sitemap />
      <Footer />
    </>
  );
}
