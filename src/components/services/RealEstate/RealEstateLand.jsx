"use client";

import styles from "./rland.module.css";
import RlHero from "./hero/RlHero";
import ProblemRl from "./Problem/rlprblm";
import SolutionRl from "./Solution/SolutionRl";
import FeatureRl from "./Feature/FeatureRl";

const RealEstateLandingPage = () => {



  return (
    <div className={styles.landingPage}>
      <RlHero />

      <ProblemRl />

     <SolutionRl/>

    <FeatureRl/>

      {/* CONTACT PLACEHOLDER */}
      <div id="contact" className={styles.contactPlaceholder} />
    </div>
  );
};

export default RealEstateLandingPage;
