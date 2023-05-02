import React, { useContext } from "react";
// import  images...
import WomanImage from "../img/about/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const About = () => {
  const { cursorLeave, cursorEnter } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text and image wrapper */}

        <div className="flex flex-col lg:flex-row h-full items-center justify-center lg:px-8 gap-x-12 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <motion.img
              onMouseEnter={cursorEnter}
              onMouseLeave={cursorLeave}
              src={WomanImage}
              alt="image"
              className="cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            onMouseEnter={cursorEnter}
            onMouseLeave={cursorLeave}
            className="flex flex-col justify-center items-center lg:items-start flex-1 lg:order-2 px-4 pt-40 pb-10 lg:pb-12 lg:pt-0 lg:w-auto z-10"
          >
            <h1 className="h1">About Me</h1>
            <p className="mb-10 max-w-sm">
              Esse sint do proident aute duis aliquip consequat enim qui
              commodo. Quis nostrud voluptate nulla voluptate anim.
              <br />
              <br />
              Esse sint do proident aute duis aliquip consequat enim qui
              commodo. Quis nostrud voluptate nulla voluptate anim.
            </p>

            <Link to={`/portfolio`} className="btn">
              View My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
