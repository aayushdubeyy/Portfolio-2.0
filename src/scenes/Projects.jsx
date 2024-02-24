import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import study_notion from "../assets/study-notion.png";
import shop_with_ecomzy from "../assets/shop-with-ecomzy.png";
import modern_chair from "../assets/modern-chair.png";
import plat_code from "../assets/plat-code.png";
import tripy_trips from "../assets/tripy-trips.png";
import razorpay_clone from "../assets/razorpay-clone.png";
import discord_clone from "../assets/discord-clone.png";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, imgSrc, para  }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("_").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {para}
        </p>
      </div>
      <img src={imgSrc} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-12 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        I’m passionate about creating stunning, user-friendly designs for new projects, while ensuring a responsive and efficient backend experience.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Study Notion" imgSrc={study_notion} para="Study Notion is an Edtech platform which is cloud based. It is fully function for both students and teacher and is totally scalable."/>
          <Project title="Shop with Ecomzy" imgSrc={shop_with_ecomzy} para="Shopping beautiful accessories is much more rewarding when the website is beautiful too!"/>

          {/* ROW 2 */}
          <Project title="Modern Chair" imgSrc={modern_chair} para="Who would've thought buying a simple chair can be so rewarding? This UI did."/>
          <Project title="Plat-Code" imgSrc={plat_code} para="You know how your child gets good marks even when he never completes his homework? He uses Plat-Code ofcourse."/>
          <Project title="Tripy Trips" imgSrc={tripy_trips} para="My friends always like to backout at last moment. Maybe we can go together? Time for Trippy trips :)"/>

          {/* ROW 3 */}
          <Project title="Razorpay Clone" imgSrc={razorpay_clone} para="Nobody like clones but since payment should be safe, I thought it would be a 'safe' bet."/>
          <Project title="Discord Clone" imgSrc={discord_clone} para='This project is proof that simple things can be beautiful too (like me?).'/>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
