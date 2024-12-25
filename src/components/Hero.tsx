import React from 'react'
import Image from 'next/image'
import styles from '@/styles/hero.module.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.textSection}>
        <h1>Hello! <br /> I’m <span>Syeda Aleeza Abbas</span></h1>
        <h2 >A Frontend Developer & UI Designer</h2>
        <p>
        As a dedicated frontend developer, I craft aesthetically pleasing and intuitive websites, prioritizing responsive design and smooth user interactions. My goal is to transform ideas into outstanding digital experiences that captivate and engage users.
        </p>
        {/* Contact Button */}
        <a href="#contact" className={styles.contactButton}>
          Contact Me
        </a>

        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/syeda-aleeza-abbas-a391812ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target='_blank'
            rel="noopener noreferrer">
            <FaLinkedin className={styles.socialLinks} />
          </a>

          <a href="https://github.com/syedaaleezaabbas"
            target='_blank'
            rel="noopener noreferrer">
            <FaGithub className={styles.socialLinks} />
          </a>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className={styles.imageSection} data-aos="fade-up">
        <Image
          src="/home.jpeg"
          alt="Profile Picture"
          width={550}
          height={550} />
      </div>
    </div >
  )
}

export default Hero
