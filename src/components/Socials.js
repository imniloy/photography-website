import React, { useContext } from "react";
import { ImFacebook, ImInstagram, ImTwitter, ImLinkedin } from "react-icons/im";
import { CursorContext } from "../context/CursorContext";
import { motion } from "framer-motion";

const Socials = () => {
  const { cursorLeave, cursorEnter } = useContext(CursorContext);

  return (
    <ul
      className="flex items-center space-x-4"
      onMouseEnter={cursorEnter}
      onMouseLeave={cursorLeave}
    >
      <motion.li className="cursor-pointer">
        <ImFacebook />
      </motion.li>
      <motion.li
        className="cursor-pointer"
        onMouseEnter={cursorEnter}
        onMouseLeave={cursorLeave}
      >
        <ImInstagram />
      </motion.li>
      <motion.li
        className="cursor-pointer"
        onMouseEnter={cursorEnter}
        onMouseLeave={cursorLeave}
      >
        <ImTwitter />
      </motion.li>
      <motion.li
        className="cursor-pointer"
        onMouseEnter={cursorEnter}
        onMouseLeave={cursorLeave}
      >
        <ImLinkedin />
      </motion.li>
    </ul>
  );
};

export default Socials;
