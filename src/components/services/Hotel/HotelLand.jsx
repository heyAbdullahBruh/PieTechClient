"use client";

import HotelHero from "./Hero/heroHL";
import styles from "./hotelLnd.module.css";
import ProblemHotel from "./Problem/rlprblm";
import SolutionHotel from "./Solution/SolutionHtl";

const HotelLand = () => {
  return (
    <aside className={styles.hotelLand}>
      <HotelHero />
      <ProblemHotel />
      <SolutionHotel />
    </aside>
  );
};

export default HotelLand;
