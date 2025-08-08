"use client";

import AuditFormHotel from "./AuditForm/hotelAudit";
import FAQ_Hotel from "./FAQ_HTL/FAQ_HTL";
import HotelFeature from "./Feature/FeatureHtl";
import HotelHero from "./Hero/heroHL";
import styles from "./hotelLnd.module.css";
import HotelProtfolio from "./Portfolio/PortFolio";
import ProblemHotel from "./Problem/rlprblm";
import SolutionHotel from "./Solution/SolutionHtl";
import HotelTestimonials from "./TestmonialHtl/TstmnlHtl";

const HotelLand = () => {
  return (
    <aside className={styles.hotelLand}>
      <HotelHero />
      <ProblemHotel />
      <SolutionHotel />
      <HotelFeature />
      <HotelProtfolio />
      <AuditFormHotel />
      <HotelTestimonials />
      <FAQ_Hotel />
    </aside>
  );
};

export default HotelLand;
