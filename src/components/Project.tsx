import React from 'react';
import styles from '@/styles/Projects.module.css';
import Image from 'next/image';
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h1 className={styles.heading}>Projects</h1>
      <p className={styles.subheading}>What I Have Crafted</p>

      <div className={styles.projectContainer}>
        {/* project1 */}
        <div className={styles.projectCard} data-aos="zoom-in">
          <Image
            src="/project1pic.png"
            alt="furniture site"
            width={600}
            height={400}
            className={styles.projectImage} />
          <h2 className={styles.projectTitle}>Furniture Website</h2>
          <p className={styles.projectDescription}>
            Built a responsive Multi-Pages Furniture Site with Next.js and Tailwind CSS.
          </p>
          <div className={styles.links}>
            <a
              href="https://furniture-next-js-project.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <LuSquareArrowOutUpRight className={styles.icons} />
              Live Preview
            </a>
            <a
              href="https://github.com/syedaaleezaabbas/next.js-project.git"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaGithub className={styles.icons} />
              View Code
            </a>
          </div>
        </div>


        {/* project2 */}
        <div className={styles.projectCard} data-aos="zoom-in">
          <Image
            src="/project3pic.png"
            alt="coffee shop website"
            width={600}
            height={400}
            className={styles.projectImage} />
          <h2 className={styles.projectTitle}>Coffep Shop</h2>
          <p className={styles.projectDescription}>
            Created a sleek, responsive coffee shop site using Next.js and Custom CSS.
          </p>
          <div className={styles.links}>
            <a
              href="https://coffee-shop-orpin-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <LuSquareArrowOutUpRight className={styles.icons} />
              Live Preview
            </a>
            <a
              href="https://github.com/syedaaleezaabbas/coffee-shop-website.git"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaGithub className={styles.icons} />
              View Code
            </a>
          </div>
        </div>


        {/* project3 */}
        <div className={styles.projectCard} data-aos="zoom-in">
          <Image
            src="/project2.png"
            alt="portfolio"
            width={600}
            height={400}
            className={styles.projectImage} />
          <h2 className={styles.projectTitle}>Portfolio</h2>
          <p className={styles.projectDescription}>
            Built a responsive multipage portfolio website using Next.js and Tailwind CSS.
          </p>

          <div className={styles.links}>
            <a
              href="https://portfolio-tailwindcss-chi-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <LuSquareArrowOutUpRight className={styles.icons} />
              Live Preview
            </a>
            <a
              href="https://github.com/syedaaleezaabbas/portfolio-tailwindcss.git"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaGithub className={styles.icons} />
              View Code
            </a>
          </div>
        </div>


        {/* project4 */}
        <div className={styles.projectCard} data-aos="zoom-in">
          <Image
            src="/project4.png"
            alt="static resume"
            width={600}
            height={400}
            className={styles.projectImage} />
          <h2 className={styles.projectTitle}>Static Resume</h2>
          <p className={styles.projectDescription}>
            Developed a Static Resume Builder using HTML, CSS and Typescript.
          </p>
          <div className={styles.links}>
            <a
              href="https://milestone1-2-mu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <LuSquareArrowOutUpRight className={styles.icons} />
              Live Preview
            </a>
            <a
              href="https://github.com/syedaaleezaabbas/Hackathon-Milestone1-2.git"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaGithub className={styles.icons} />
              View Code
            </a>
          </div>
        </div>


        {/* project5 */}
        <div className={styles.projectCard} data-aos="zoom-in">
          <Image
            src="/project5.png"
            alt="dynamic resume"
            width={600}
            height={400}
            className={styles.projectImage} />
          <h2 className={styles.projectTitle}>Dynamic Resume</h2>
          <p className={styles.projectDescription}>
            Created a Dynamic Resume Builder using HTML, CSS and Typescript.
          </p>
          <div className={styles.links}>
            <a
              href="https://milestone3-mu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <LuSquareArrowOutUpRight className={styles.icons} />
              Live Preview
            </a>
            <a
              href="https://github.com/syedaaleezaabbas/Hackathon-Milestone3.git"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaGithub className={styles.icons} />
              View Code
            </a>
          </div>
        </div>


        {/* project6 */}
        <div className={styles.projectCard} data-aos="zoom-in"
        >
          <Image
            src="/project6.png"
            alt="editable resume"
            width={600}
            height={400}
            className={styles.projectImage} />
          <h2 className={styles.projectTitle}>Editable Resume</h2>
          <p className={styles.projectDescription}>
            Developed an Editable Resume Builder using HTML, CSS and Typescript.</p>
          <div className={styles.links}>
            <a
              href="https://milestone4-rose.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <LuSquareArrowOutUpRight className={styles.icons} />
              Live Preview
            </a>
            <a
              href="https://github.com/syedaaleezaabbas/Hackathon-Milestone4.git"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaGithub className={styles.icons} />
              View Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;