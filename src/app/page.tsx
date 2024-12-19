import Image from "next/image";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Projects from "@/components/Project";
import About from "@/components/About";
// import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
     <Hero />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Contact />
    </>
  )
}
