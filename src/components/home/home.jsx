"use client";
import { useState } from "react";
import styles from "./home.module.css";
import Hero from "./hero/hero";
import TrustedComp from "./company/TrustedComp";
import HomeAbout from "./homeAbout/homeBAbout";

const Home = () => {
  return (
    <section className={styles.home}>
      <Hero />
      <TrustedComp />
      <HomeAbout/>
    </section>
  );
};
export default Home;
