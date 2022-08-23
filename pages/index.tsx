import type { NextPage } from "next";
import Head from "next/head";
import Section1 from "../module/page/home-page/Section-1/Index";
import Section2 from "../module/page/home-page/Section-2/Index";
import Section3 from "../module/page/home-page/Section-3";
import Section4 from "../module/page/home-page/Section-4";
import Section5 from "../module/page/home-page/Section-5";
import Section6 from "../module/page/home-page/Section-6";

import Layout from "../module/layout/Index";
export default function Home() {
  return (
    <>
      <Head>
        <title>Saliant WordPress theme by Theme by ThemeNectar</title>
        <meta
          name="description"
          content="This is a clone, for some how you see this page, inorge this, thankyou!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </>
  );
}
Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
