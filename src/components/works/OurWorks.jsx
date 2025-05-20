"use client";
import { useEffect, useState } from "react";
import styles from "./ourWorks.module.css";
import WorksTemp from "./worksTemp";
import { api } from "@/data/api";
import Image from "next/image";

const OurWorks = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProjData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${api}/project/allProjects`, {
        cache: "no-store",
      });
      const response2 = await response.json();
      setProjects(response2?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjData();
  }, []);
  
  return (
    
    <aside className={styles.ourWorks}>
      <section className={styles.owHead}>
        {/* Background Video */}
        <video
          className={styles.backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dpjrmamby/video/upload/v1747678165/workBanner_cjm055.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Gray Shadow Overlay */}
        <div className={styles.overlay}></div>

        {/* Foreground Content */}
        <div className={styles.heroContent}>
          <h1>Our Great works</h1>
        </div>
      </section>

      <section className={styles.workShow}>
        {projects?.map((data) => {
          const { _id,title, thumbnail } = data;
          console.log(data);
          return (
            <div className={styles.projTemp} key={_id}>
              <Image src={thumbnail?.photo} width={300} height={200} alt={`${title} image`} />
              <h4>{title?.slice(0,40)}...</h4>
              
            </div>
          );
        })}
      </section>
    </aside>
  );
};

export default OurWorks;
