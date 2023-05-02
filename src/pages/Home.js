import React, { useContext } from "react";
import WomanImage from "../img/home/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Home = () => {
  const { cursorLeave, cursorEnter } = useContext(CursorContext);

  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
    >
      <div className="container mx-auto h-full relative md:px-8">
        <div className="flex flex-col justify-center ">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            onMouseEnter={cursorEnter}
            onMouseLeave={cursorLeave}
            className="w-full pt-36 pb-12 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">
              Photographer <br /> & Flim Maker{" "}
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Los Angeles, USA
            </p>
            <Link to={`/contact`} className="btn mb-8">
              Hire Me
            </Link>
          </motion.div>
          {/* Image */}
          <div className="flex justify-end max-h-max md:max-h-full lg:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="relative lg:-right-40 overflow-hidden"
            >
              <motion.img
                onMouseEnter={cursorEnter}
                onMouseLeave={cursorLeave}
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={WomanImage}
                className=""
                alt="womanImg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
