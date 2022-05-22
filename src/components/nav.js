import React from "react";

const styles = {
  linkStyle: {  
    fontSize: "1.2rem",
    textDecoration: "none",
    color: "white"
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
    <nav className="flex-container space-around">
      <div>
        <a style= {styles.linkStyle}href="#home" onClick={() => handlePageChange("Home")}>
          Home
        </a>
      </div>
      <div>
        <a style={styles.linkStyle} href="#">About me</a>
      </div>
      <div>
        <a style={styles.linkStyle} href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
          Portfolio
        </a>
      </div>
      <div>
        <a style={styles.linkStyle} href="#">Contact</a>
      </div>
      <div>
        <a style={styles.linkStyle} href="#">C.V</a>
      </div>
    </nav>
  );
}
