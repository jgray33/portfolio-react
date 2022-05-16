import React from "react";

const styles = {
  linkStyle: {
    fontSize: "1.2rem",
    textDecoration: "none",
  },

  //   container: {
  //     display: "flex",
  //     flexDirection: "row",
  //     flexWrap: "wrap",
  //     justifyContent: 'space-around'
  //   },
};

export default function Nav({currentPage, handlePageChange}) {
  return (
    <nav class="flex-container space-around">
      <div style={styles.linkStyle}>
        <a href="#home" onClick={() => handlePageChange("Home")}>
          Home
        </a>
      </div>
      <div style={styles.linkStyle}>
        <a href="#">About me</a>
      </div>
      <div style={styles.linkStyle}>
        <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
          Portfolio
        </a>
      </div>
      <div style={styles.linkStyle}>
        <a href="#">Contact</a>
      </div>
      <div style={styles.linkStyle}>
        <a href="#">C.V</a>
      </div>
    </nav>
  );
}
