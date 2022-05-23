import React from "react";
import myImage from "./juliaPastry.jpg";

const styles = {
  img: {
    width: "200px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  container: {
    margin: "auto",
    width: "100%",
  },
  center: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "5%",
  },
  heading: {
    textAlign: "center",
  },
  p: {
    textAlign: "center",
    paddingTop: "3%",
  },
};

export default function Main() {
  return (
    <div className="auto">
      <div className="flex-container">
        <div style={styles.center}>
          <h1 style={styles.heading}>Hi my name is Julia</h1>
          <div style={styles.center} className="flex-container">
            <img style={styles.img} src={myImage} alt="jg eating" />
          </div>
          <p style={styles.p}>
            {" "}
            I am a full-stack web developer based in Birmingham
          </p>
        </div>
      </div>
    </div>
  );
}
