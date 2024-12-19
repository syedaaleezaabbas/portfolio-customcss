import React from 'react'
import Image from 'next/image'
import styles from '@/styles/hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.textSection}>
        <h1>Hello! <br /> I’m <span>Syeda Aleeza Abbas</span></h1>
        <h2>A Frontend Developer & UI Designer</h2>
        <p>
          As a passionate frontend developer, I create visually appealing and user-friendly websites
          with a focus on responsive design and seamless user experience.
          I strive to deliver exceptional digital experiences that bring ideas to life.
        </p>
        {/* Contact Button */}
        <a href="#contact" className={styles.contactButton}>
          Contact Me
        </a>
      </div>

      {/* Right Section: Image */}
      <div className={styles.imageSection} data-aos="fade-up">
        <Image
          src="/home.jpeg"
          alt="Profile Picture"
          width={550}
          height={550} />
      </div>
    </div>
  )
}

export default Hero
