
import {motion} from 'framer-motion';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full pt-36 pb-56 mx-auto">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eef]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I am <span className="text-[#915eff]">Mahmoud</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I Develop & Design Front-End <br className="sm:block hidden" />{" "}
            Responsive Web Applications & Pages
          </p>
        </div>
      </div>

      {/* the computer canvas */}
      {/* <ComputersCanvas /> */}
      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915eff] flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#915eff] mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
