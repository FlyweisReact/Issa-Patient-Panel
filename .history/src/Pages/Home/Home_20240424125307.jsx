/** @format */

import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/SideBar/SideBar";
import UpperBar from "../../Components/UpperBar/UpperBar";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = ({ Wcomponenet }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [iscompleteintakeModalopne, setcompleteintakeModalopne] =
    useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth < 768; 
      setcompleteintakeModalopne(isDesktop);
      setIsMenuOpen(isDesktop);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem("hasModalBeenShown");

    if (!hasModalBeenShown) {
      setcompleteintakeModalopne(true);
      localStorage.setItem("hasModalBeenShown", "true");
    }
  }, []);

  return (
    <>
      <div className={`Hoc ${isMenuOpen ? "menu-open" : ""}`}>
        <div className={` ${isMenuOpen ? "sidebar1" : ""}`}>
          <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div>
          <UpperBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          {Wcomponenet && <Wcomponenet />}
        </div>
      </div>
    </>
  );
};

export default Home;
