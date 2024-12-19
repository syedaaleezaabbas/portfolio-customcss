import React from 'react'
import styles from '@/styles/skills.module.css'
import Image from 'next/image';
import { FaHtml5 } from "react-icons/fa";

const Skills = () => {
    const skills = [
        { name: "HTML", icon: <FaHtml5 size={100} /> },
        { name: "CSS", icon: "/icons/css.png" },
        { name: "JavaScript", icon: "/icons/js.png" },
        { name: "React", icon: "/icons/react.png" },
        { name: "Next.js", icon: "/icons/nextjs.png" },
        { name: "GitHub", icon: "/icons/github.png" },
        { name: "TypeScript", icon: "/icons/ts.png" },
        { name: "Figma", icon: "/icons/figma.png" },
        { name: "Git", icon: "/icons/git.png" },
        { name: "VS Code", icon: "/icons/vscode.png" },
    ];

    return (
        <div className={styles.skillsContainer}>
            <h1>My Skills</h1>
            <p>Here are the technologies I am proficient in:</p>
            <div className={styles.skillsIcon}>
                {skills.map((skill) => (
                    <div className={styles.skill} key={skill.name}>
                        {skill.icon}
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;