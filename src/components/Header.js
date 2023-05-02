import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/header/logo.svg";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import { CursorContext } from "../context/CursorContext";
import { motion } from "framer-motion";

const Header = () => {
  const { cursorLeave, cursorEnter } = useContext(CursorContext);

  return (
    <header className="fixed top-0 left-0 right-0 w-full px-4 sm:px-6 md:px-12 lg:px-24 z-50 h-[100px] lg:h-36 flex items-center justify-between">
      <motion.nav
        className="max-w-[200px]"
        onMouseEnter={cursorEnter}
        onMouseLeave={cursorLeave}
      >
        <Link to={"/"}>
          <img src={Logo} alt="logo" />
        </Link>
      </motion.nav>

      <nav className="hidden lg:flex space-x-24">
        <ul className="space-x-10 flex items-center">
          <motion.li
            onMouseEnter={cursorEnter}
            onMouseLeave={cursorLeave}
            className="text-[#696c6d] hover:text-primary font-bold transition"
          >
            <Link to={`/`}>Home</Link>
          </motion.li>
          <motion.li
            onMouseEnter={cursorEnter}
            onMouseLeave={cursorLeave}
            className="text-[#696c6d] hover:text-primary font-bold transition"
          >
            <Link to={`/about`}>About</Link>
          </motion.li>
          <motion.li
            onMouseEnter={cursorEnter}
            onMouseLeave={cursorLeave}
            className="text-[#696c6d] hover:text-primary font-bold transition"
          >
            <Link to={`/portfolio`}>Portfolio</Link>
          </motion.li>
          <motion.li
            onMouseEnter={cursorEnter}
            onMouseLeave={cursorLeave}
            className="text-[#696c6d] hover:text-primary font-bold transition"
          >
            <Link to={`/contact`}>Contact</Link>
          </motion.li>
        </ul>

        {/* social icons */}
        <Socials />
      </nav>
      {/* mobile HumburgerIcon */}
      <MobileNav />
    </header>
  );
};

export default Header;
