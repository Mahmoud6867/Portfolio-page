/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { globe } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "./../utils/motion";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

function generateRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
}

// This function gets the projects from firebase

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   technologies,
//   repo,
//   link,
//   img,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{ max: 45, scale: 1, speed: 450 }}
//         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
//       >
//         <div className="relative w-full h-[230px]">
//           <img
//             src={img}
//             alt={name}
//             className=" w-full h-full object-cover rounded-2xl"
//           />
//           <div className="absolute  inset-0 flex justify-between m-3 card-img_hover">
//             <div
//               onClick={() => window.open(link, "_blank")}
//               className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition ease-in-out hover:scale-150 hover:bg-violet-900"
//             >
//               <img
//                 src={globe}
//                 alt="GitHub"
//                 className="w-5/6 h-5/6 object-contain"
//               />
//             </div>
//             <div
//               onClick={() => window.open(repo, "_blank")}
//               className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition ease-in-out hover:scale-150 hover:bg-violet-900"
//             >
//               <img
//                 src={github}
//                 alt="GitHub"
//                 className="w-5/6 h-5/6 object-contain"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mt-5">
//           <h3 className="text-white font-bold text-[24px]">{name}</h3>
//           <p className="mt-2 text-secondary text-[14px]">{description}</p>
//         </div>
//         <div className="mt-4 flex flex-wrap gap-2">
//           {technologies.map((tech) => (
//             <p
//               key={tech}
//               style={{ color: generateRandomHexColor() }}
//               className={`text-[14px]`}
//             >
//               #{tech}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };




// This function gets the projects from the assets

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <div >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className=" w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute  inset-0 flex justify-between m-3 card-img_hover">
            <div
              onClick={() => window.open(website_link, "_blank")}
              className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition ease-in-out hover:scale-150 hover:bg-violet-900"
            >
              <img
                src={globe}
                alt="GitHub"
                className="w-5/6 h-5/6 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition ease-in-out hover:scale-150 hover:bg-violet-900"
            >
              <img
                src={github}
                alt="GitHub"
                className="w-5/6 h-5/6 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              style={{ color: generateRandomHexColor() }}
              className={`text-[14px]`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {

  {/* This function gets the projects from firebase */}

  // const [project, setProject] = useState([]);

  // const usersCollection = collection(db, "projects");

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollection);
  //     setProject(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     console.log(data.docs);
  //   };

  //   getUsers();
  // }, []);
  return (
    <div>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex justify-center flex-wrap gap-7">


        {/* This function gets the projects from firebase */}

        {/* {project.map((pr, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...pr} />
        ))} */}


        {/* This function gets the projects from the assets */}

        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
