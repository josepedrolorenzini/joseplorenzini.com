/* eslint-disable no-unused-vars */
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

const MotionLink = motion(Link);

function Header({ header }) {
  //  let myParams = useLocation();
  //  console.log(myParams);
  //  header = myParams.pathname === '/' ? 'Home Page' : myParams.pathname === '/about' ? 'About Page' : myParams.pathname === '/contact' ? 'Contact Page' : '';

  return (
    <div className="mx-2 my-2 flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <h3 className="header-name text-white backdrop-blur-2xl">
          Jose Lorenzini
        </h3>
        <h3 style={{ color: "#b4fb51" }} className="font-black">
          Full Stack Web Developer + DevOps {header}{" "}
        </h3>
      </div>

      <div>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <MotionLink
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            to="/"
          >
            Home
          </MotionLink>
          <MotionLink
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            to="/about"
          >
            About
          </MotionLink>
          <MotionLink
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            to="/portafolio"
          >
            Portafolio
          </MotionLink>
          <MotionLink
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            to="/contact"
          >
            Contact
          </MotionLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
