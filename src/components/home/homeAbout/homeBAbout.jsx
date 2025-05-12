import Image from "next/image";
import styles from "../home.module.css";
import abtImg from "@/gallary/siteImgs/websiteTemp.svg";
import growup from "@/gallary/siteImgs/growup.svg";
import Link from "next/link";

const HomeAbout = () => {
  const features = [
    {
      icon: "🧠",
      title: "Client-First Mindset",
      desc: "We focus on understanding your goals and building around them.",
    },
    {
      icon: "🎯",
      title: "Custom-Tailored Solutions",
      desc: "Every project is unique — so are our strategies.",
    },
    {
      icon: "🖌️",
      title: "Modern UI/UX Design",
      desc: "Sleek, user-centric designs that keep people engaged.",
    },
    {
      icon: "⚡",
      title: "Fast & Optimized Websites",
      desc: "Performance is our priority, always lightning fast.",
    },
    {
      icon: "🔍",
      title: "SEO & Marketing Ready",
      desc: "We build with discoverability and conversion in mind.",
    },
    {
      icon: "📱",
      title: "Mobile-First Approach",
      desc: "Seamless experiences across all screen sizes.",
    },
    {
      icon: "🏆",
      title: "Proven Track Record",
      desc: "Happy clients, real results, and repeat business.",
    },
  ];
  return (
    <section className={styles.homeAbt}>
      <div className={styles.abtSection}>
        <div className={styles.hAbtDesc}>
          <p>
            At PieTech, we’re passionate about crafting digital experiences that
            drive real business growth. With a focus on design, performance, and
            user-centric solutions, we help brands stand out in the digital
            world. Our team blends creativity and technology to build websites,
            apps, and platforms that make an impact. Whether you’re a startup or
            an enterprise, we tailor solutions that truly reflect your goals. We
            believe in smart work, clear communication, and long-term
            partnerships.
          </p>
          <br />
          <h3>We're trying to :-</h3>
          <ul>
            <li>
              <strong>🚀 Future-Ready Tech Stack</strong>
            </li>
            <li>
              <strong>🎯 Custom Solutions</strong>
            </li>
            <li>
              <strong>💼 Experienced Team</strong>
            </li>
            <li>
              <strong>📈 Growth Focused</strong>
            </li>
            <li>
              <strong>🤝 Client-First Approach</strong>
            </li>
          </ul>
        </div>
        <div className={styles.hAbtImg}>
          <Image src={abtImg} alt="aboutImage" width={300} height={300} />
        </div>
      </div>
      <div className={styles.whyUsSec}>
        <div className={styles.wuImg}>
          <Image src={growup} alt="growUp" width={300} height={300} />
        </div>
        <div className={styles.wuDesc}>
          <h2 className={styles.title}>💎 Why Choose PieTech?</h2>
          <p className={styles.description}>
            We’re not just developers — we’re your digital growth partners,
            committed to delivering high-quality, scalable, and smart solutions
            that actually drive results.
          </p>
          <ul>
            {features?.map((item, idx) => (
              <li key={idx}>
                <strong>{item.icon + item.title} — </strong> {item.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.knowMoreBtn}>
        <Link href={"/about-us"}>
          <button>Know More PieTech</button>
        </Link>
      </div>
    </section>
  );
};

export default HomeAbout;
