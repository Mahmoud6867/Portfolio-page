import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology,i) => (
        <div
          className=" flex flex-col justify-center items-center"
          key={technology.name}
        >
          {/* <BallCanvas icon={technology.icon}/> */}


          <Tilt className="xs:w-[250px] w-full">
            <motion.div
              variants={fadeIn("right", "spring", 0.5 * i, 0.75)}
              className="w-full green-pink-gradient p-[1px] rounded-full shadow-card"
            >
              <div
                options={{ max: 45, scale: 1, speed: 450 }}
                className=" bg-tertiary rounded-full py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  {technology.name}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
