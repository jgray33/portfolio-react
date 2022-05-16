import React from "react";

const styles = {
  linkStyle: {
    fontSize: "1.2rem",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-around'
  },
};

export default function Nav() {
  return (
    <nav style={styles.container}>
      <div style={styles.linkStyle}>
        <a href="#">Home</a>
      </div>
      <div style={styles.linkStyle}>
        <a href="#">About me</a>
      </div>
      <div style={styles.linkStyle}>
        <a href="#">Portfolio</a>
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
