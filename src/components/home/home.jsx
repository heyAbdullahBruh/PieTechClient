"use client";
import { useState } from "react";
import styles from "./home.module.css";
import Hero from "./hero/hero";

const Home = () => {

  return (
    <section className={styles.home}>
      <Hero/>
    </section>
  );
};

export default Home;
