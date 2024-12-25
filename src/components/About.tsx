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
          Hi! {"I'm"} Aleeza, a dedicated Frontend Web Developer focused on creating clean, intuitive, and visually engaging websites. {"I’m"} passionate about blending creativity with technical expertise to deliver responsive designs and exceptional user experiences. Continuously striving to learn and evolve, I aim to stay at the forefront of web development by exploring new tools and techniques. Whether developing from the ground up or enhancing existing designs, {"I’m"} committed to bringing innovative ideas to life with precision and purpose.
        </p>
      </div>
    </div>
  );
};

export default About;
