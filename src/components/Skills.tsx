import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiFigma } from "react-icons/si";
import styles from "@/styles/skills.module.css";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className={styles.icon} style={{ color: "#E34F26" }} /> },
    { name: "CSS", icon: <FaCss3Alt className={styles.icon} style={{ color: "#1572B6" }} /> },
    { name: "JavaScript", icon: <FaJs className={styles.icon} style={{ color: "#F7DF1E" }} /> },
    { name: "TypeScript", icon: <SiTypescript className={styles.icon} style={{ color: "#3178C6" }} /> },
    { name: "React", icon: <FaReact className={styles.icon} style={{ color: "#61DAFB" }} /> },
    { name: "Next.js", icon: <SiNextdotjs className={styles.icon} style={{ color: "#222222" }} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className={styles.icon} style={{ color: "#06B6D4" }} /> },
    { name: "Figma", icon: <SiFigma className={styles.icon} style={{ color: "#A259FF" }} /> },
  ];

  return (
    <div className={styles.skillsContainer}>
      <h1>My Skills</h1>
      <p>I am proficient in the following technologies:</p>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skill}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;