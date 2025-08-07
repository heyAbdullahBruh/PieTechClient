'use client';

import styles from './rland.module.css';
import RlHero from './hero/RlHero';

const RealEstateLandingPage = () => {
 
  const problems = [
    {
      title: "Slow Loading Websites",
      description: "Your real estate website takes forever to load, losing potential clients every second",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    },
    {
      title: "Poor Mobile Experience",
      description: "80% of property searches happen on mobile, but your site isn't optimized",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop"
    },
    {
      title: "Terrible SEO Rankings",
      description: "Your competitors appear first on Google while your listings stay buried",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=300&h=200&fit=crop"
    },
    {
      title: "No Clear Call-to-Actions",
      description: "Visitors browse your properties but never contact you or schedule viewings",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop"
    },
    {
      title: "Outdated Design",
      description: "Your website looks like it's from 2010, destroying credibility instantly",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop"
    },
    {
      title: "Missing Lead Capture",
      description: "Potential buyers visit but you have no way to follow up with them",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop"
    },
    {
      title: "Poor Property Search",
      description: "Clients can't easily filter and find the properties they're looking for",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=300&h=200&fit=crop"
    },
    {
      title: "No Social Proof",
      description: "Missing testimonials and reviews that build trust with potential clients",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop"
    },
    {
      title: "Broken Contact Forms",
      description: "Your contact forms don't work properly, losing valuable inquiries",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop"
    },
    {
      title: "No Analytics Tracking",
      description: "You have no idea which marketing efforts actually generate leads",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    },
    {
      title: "Poor Image Quality",
      description: "Blurry, poorly compressed photos make properties look unappealing",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=300&h=200&fit=crop"
    },
    {
      title: "No Integration Tools",
      description: "Your website doesn't connect with CRM, email marketing, or MLS systems",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
    },
    {
      title: "Security Vulnerabilities",
      description: "Your site lacks proper security, risking client data and your reputation",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop"
    }
  ];

  const solutions = [
    {
      icon: "⚡",
      title: "Lightning Fast Loading",
      description: "We build websites that load under 2 seconds using Next.js SSR optimization"
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "Perfect mobile experience with instant lead capture forms and touch-friendly navigation"
    },
    {
      icon: "🔍",
      title: "SEO Domination",
      description: "Advanced SEO strategies to rank #1 for your local real estate keywords"
    },
    {
      icon: "🚀",
      title: "Strategic CTAs",
      description: "Conversion-optimized buttons and forms placed strategically throughout your site"
    },
    {
      icon: "💻",
      title: "Modern, Premium Design",
      description: "Stunning, contemporary designs that establish authority and build instant trust"
    },
    {
      icon: "👥",
      title: "Advanced Lead Capture",
      description: "Multiple lead magnets, exit-intent popups, and automated follow-up sequences"
    },
    {
      icon: "🏠",
      title: "Intelligent Property Search",
      description: "Advanced filtering, saved searches, and property recommendations for buyers"
    },
    {
      icon: "✅",
      title: "Social Proof Integration",
      description: "Testimonials, reviews, and success stories prominently displayed for credibility"
    },
    {
      icon: "📧",
      title: "Bulletproof Forms",
      description: "100% reliable contact forms with instant notifications and backup systems"
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Detailed tracking and reporting on leads, traffic sources, and conversion rates"
    },
    {
      icon: "📸",
      title: "Professional Photography",
      description: "High-quality image optimization and gallery systems that showcase properties"
    },
    {
      icon: "🔗",
      title: "Seamless Integrations",
      description: "Connect with your CRM, email marketing, MLS, and all essential real estate tools"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security protocols to protect your client data and maintain trust"
    }
  ];

  const features = [
    {
      icon: "🚀",
      title: "Next.js Performance",
      description: "Lightning-fast websites that convert visitors into leads"
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "Perfect experience across all devices and screen sizes"
    },
    {
      icon: "🔍",
      title: "SEO Optimization",
      description: "Rank higher on Google and attract more qualified leads"
    },
    {
      icon: "💼",
      title: "Lead Generation Focus",
      description: "Every element designed to capture and convert prospects"
    },
    {
      icon: "⚡",
      title: "Real-time Updates",
      description: "Instant property updates and dynamic content management"
    },
    {
      icon: "🛡️",
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee"
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Track performance and optimize for maximum ROI"
    },
    {
      icon: "🎨",
      title: "Custom Branding",
      description: "Unique designs that reflect your brand personality"
    },
    {
      icon: "🔧",
      title: "Easy Management",
      description: "User-friendly admin panel for effortless content updates"
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Dedicated support team always ready to help you succeed"
    }
  ];


  return (
    <div className={styles.landingPage}>
      {/* HERO SECTION */}
      <RlHero/>

      {/* PROBLEM SECTION */}
      <section className={styles.problemSection}>
        <h2 className={styles.sectionTitle}>Is Your Website Costing You Deals?</h2>
        <div className={styles.problemsGrid}>
          {problems.map((problem, index) => (
            <div key={index} className={styles.problemCard} style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={problem.image} alt={problem.title} className={styles.problemImage} />
              <h3 className={styles.problemTitle}>{problem.title}</h3>
              <p className={styles.problemDescription}>{problem.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className={styles.solutionSection}>
        <h2 className={styles.sectionTitle}>We Fix Every Problem. Guaranteed.</h2>
        <div className={styles.solutionsGrid}>
          {solutions.map((solution, index) => (
            <div key={index} className={styles.solutionCard} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={styles.solutionIcon}>{solution.icon}</div>
              <h3 className={styles.solutionTitle}>{solution.title}</h3>
              <p className={styles.solutionDescription}>{solution.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Why Choose Our Real Estate Websites?</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard} style={{ animationDelay: `${index * 0.1}s` }}>
              <span className={styles.featureIcon}>{feature.icon}</span>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT PLACEHOLDER */}
      <div id="contact" className={styles.contactPlaceholder} />
    </div>
  );
};

export default RealEstateLandingPage;