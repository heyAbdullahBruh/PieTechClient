"use client";
import { useState } from "react";
import styles from "./home.module.css";

const Home = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSetCookie = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api-pietech.onrender.com", {
        credentials: "include",
      });
      const getData = await response.json();
      setData(getData);
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(data);
  return (
    <section className={styles.home}>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <>
          <h1>Hi</h1>
          <button onClick={handleSetCookie}>save cookie</button>
        </>
      )}
    </section>
  );
};

export default Home;
