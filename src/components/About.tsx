import React from 'react'
import Image from 'next/image'
import styles from '@/styles/about.module.css'

const About = () => {
  return (
    <div className={styles.about}>

      {/* Left Side: Image */}
      <div className={styles.imageSection} data-aos="fade-up">
        <Image
          src="/about.jpeg"
          alt="Profile Picture"
          width={550}
          height={550} />
      </div>

      {/* Right Side: Content */}
      <div className={styles.textSection}>
        <h1 data-aos="fade-up">About Me</h1>
        <p data-aos="fade-up">
          Hello! I'm Aleeza, a passionate Frontend Web Developer dedicated to building clean, user-friendly websites. I'm committed to learning, growing, and mastering the art of crafting seamless digital experiences. My goal is to combine creativity with technical skills to create responsive and visually appealing websites that provide exceptional user experiences.

          I'm constantly exploring new technologies and techniques to improve my craft. Whether building from scratch or improving an existing design, I'm driven to bring fresh ideas to life through clean code and thoughtful design.
        </p>
      </div>
    </div>
  );
};

export default About;
