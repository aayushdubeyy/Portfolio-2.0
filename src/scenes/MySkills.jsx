import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import html from "../assets/HTML.png"
import css from "../assets/CSS.png"
import js from "../assets/Javascript.svg"
import express from "../assets/Express.png"
import tailwind from "../assets/Tailwind.png"
import git from "../assets/Git.svg"
import github_logo from "../assets/github-logo.svg"
import react from "../assets/React.png"
import mongodb from "../assets/MongoDB.svg"
import redux from "../assets/Redux.svg"
import node from "../assets/NodeJs.svg"
import nextt from "../assets/next.svg"
import "./MySkills.css"
// import college from "../assets/college.jpg"
const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-0 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          {/* <p className="mt-10 mb-28">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p> */}
          <div className="flex flex-col">
          <div className="mt-10 flex gap-3 w-[100%]">
            <img src={html} alt="" className="w-10 h-10 transition-all duration-200 delay-200 hover:scale-125"/>
            <img src={css} alt="" className="w-10 h-10 transition-all duration-200 delay-200 hover:scale-125"/>
            <img src={tailwind} alt="" className="w-10 h-10 transition-all duration-200 delay-200 hover:scale-125"/>
            <img src={js} alt="" className="w-10 h-10 transition-all duration-200 delay-200 hover:scale-125"/>
            <img src={react} alt="" className="w-10 h-10 transition-all duration-200 delay-200 hover:scale-125"/>
            <img src={redux} alt="" className="w-10 h-10 transition-all duration-200 delay-200 hover:scale-125"/>
            <img src={express} alt="" className="w-10 h-10 transition-all duration-200 delay-200 hover:scale-125"/>

          </div>
          
            <div className="mt-10 mb-10 flex gap-3">
              <img src={git} alt="" className="w-10 h-10 transition-all duration-200 delay-200 hover:scale-125"/>
            <img src={github_logo} alt="" className="w-10 h-10 transition-all duration-200 delay-200 hover:scale-125"/>
            <img src={mongodb} alt="" className="w-10 h-10 transition-all duration-200 delay-200 hover:scale-125"/>
            <img src={node} alt="" className="w-10 h-10 transition-all duration-200 delay-200 hover:scale-125"/>
            <img src={nextt} alt="" className="w-12 h-10 transition-all duration-200 delay-200 hover:scale-125 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-full"/>
            </div>
            
          </div>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div id="education-parent" className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                B.Tech
              </p>
            </div>
            <div id="education" className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1] " />
          </div>
          <p className="mt-5">
            Studied B.Tech in Delhi Technological University, a tier 1 college wigh CGPA of 8.83
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div id="cbse12" className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                CBSE 12th
              </p>
            </div>
            <div id="cbse12-child" className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Got 94% in Physics, Chemistry, Maths in CBSE Boards at New Green Field School, Saket 
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div id="cbse10" className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                CBSE 10th
              </p>
            </div>
            <div id="cbse10-child" className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Got 8.6 CGPA in CBSE board at New Green Field School, Saket. 
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
