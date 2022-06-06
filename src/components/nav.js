import React from "react";
import cv from "../assets/jgcv.pdf";

const styles = {
  linkStyle: {
    fontSize: "1.2rem",
    textDecoration: "none",
      },
};

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="flex-container space-around">
      <div>
        <a 
         href="#home"
         onClick={() => handlePageChange("Home")}
         className={currentPage === "Home" ? "nav-active": "nav-inactive"}>
          About me
        </a>
      </div>
      <div>
        <a
          
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={currentPage === 'Portfolio' ? "nav-active": "nav-inactive"}
        >
          Portfolio
        </a>
      </div>
      <div>
        <a
          style={styles.linkStyle}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-active": "nav-inactive"}
        >
          Contact
        </a>
      </div>
      <div>
        <a
          style={styles.linkStyle}
          href="#skills"
          onClick={() => handlePageChange("CV")}
          className={currentPage === "CV" ? "nav-active": "nav-inactive"}
        >
          My Skills
        </a>
      </div>
      <div>
        <a style={styles.linkStyle} href={cv} download
        className="nav-inactive">
          Download C.V
          
        </a>
      </div>
    </nav>
  );
}
