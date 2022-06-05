import React from "react";
import cv from "../assets/jgcv.pdf";

const styles = {
  linkStyle: {
    fontSize: "1.2rem",
    textDecoration: "none",
    color: "white",
  },
};

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="flex-container space-around">
      <div>
        <a style={styles.linkStyle}
         href="#home"
         onClick={() => handlePageChange("Home")}
         className={currentPage === "home" ? "a": "red" }>
          About me
        </a>
      </div>
      <div>
        <a
          style={styles.linkStyle}
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={currentPage === "portfolio" ? "nav-link red" : "a"}
        >
          Portfolio
        </a>
      </div>
      <div>
        <a
          style={styles.linkStyle}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
        >
          Contact
        </a>
      </div>
      <div>
        <a style={styles.linkStyle} href={cv} download>
          Download C.V
        </a>
      </div>
    </nav>
  );
}
