import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import { icons } from "../constants";

// template_0172trk
// service_fkk4fnh
// uFQWk6ThgTqbHdErC

// eslint-disable-next-line react/prop-types
const ContactCards = ({ index, title, icon, link }) => {
  return (
    <a href={`${link}`} target="_blank" rel="noreferrer">
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            // eslint-disable-next-line react/no-unknown-property
            options={{ max: 45, scale: 1, speed: 450 }}
            className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-40 h-40 object-contain" />
          </div>
        </motion.div>
      </Tilt>
    </a>
  );
};

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_fkk4fnh",
        "template_0172trk",
        {
          from_name: form.name,
          to_name: "Mahmoud",
          from_email: form.email,
          to_email: "mahmoudalaa6868@gmail.com",
          message: form.message,
        },
        "uFQWk6ThgTqbHdErC"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert(`There is a problem in sending this email ${error}`);
        }
      );
  };

  return (
    <div className="mt-20 flex flex-wrap gap-10">
      
      {icons.map((icon, index) => (
        <ContactCards key={icon.title} index={index} {...icon} />
      ))}
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Or get in touch via email</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <p className={`${styles.sectionSubText} lowercase`}>
            In case of an error sending the email you can contact me directly at
            :
          </p>
          <p className={`${styles.sectionSubText} lowercase`}>
            mahmoudalaa6868@gmail.com
          </p>
          <form
            className="mt-12 flex flex-col gap-8"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            {/* Name */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            {/* Email */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            {/* Message */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                required
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        {/*  */}

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[800px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
