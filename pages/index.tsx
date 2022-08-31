import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "./../module/page/home-page";

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
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <HomePage />
    </>
  );
}
Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
