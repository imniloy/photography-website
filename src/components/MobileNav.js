import React, { useState } from "react";
import { CgMenuRight, CgCross } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const changeMenu = () => {
    setOpenMenu(!openMenu);
  };

  const menuVariants = {
    hidden: {
      x: "100%",
    },
    show: {
      x: "0%",
      transition: {
        type: "spring",
        duration: 1,
        ease: [0.6, 0.1, -0.05, 0.9],
      },
    },
  };

  return (
    <nav className="text-primary lg:hidden text-3xl cursor-pointer p-5">
      <CgMenuRight onClick={changeMenu} />
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : "hidden"}
        className={`h-screen bg-white shadow-2xl absolute w-full top-0 right-0 max-w-xs z-40`}
      >
        <div className="text-4xl absolute left-4 top-4 cursor-pointer">
          <IoMdClose onClick={changeMenu} />
        </div>
        <ul className="h-full flex flex-col space-y-8 font-bold justify-center items-center">
          <li className="">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="">
            <Link to={`/about`}>About</Link>
          </li>
          <li className="">
            <Link to={`/portfolio`}>Portfolio</Link>
          </li>
          <li className="">
            <Link to={`/contact`}>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
