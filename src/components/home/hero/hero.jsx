import styles from '@/components/home/home.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      {/* Background Video */}
      <video
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://res.cloudinary.com/dpjrmamby/video/upload/v1746989800/PieTechBanner_ptcgew.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gray Shadow Overlay */}
      <div className={styles.overlay}></div>

      {/* Foreground Content */}
      <div className={styles.heroContent}>
        <h1>Welcome to My Website</h1>
        <p>This is some text over the background video.</p>
      </div>
    </div>
  );
}
