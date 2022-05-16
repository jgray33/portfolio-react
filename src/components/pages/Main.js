import React from "react";
import myImage from "./juliaPastry.jpg";

const styles = {
  img: {
    width: "200px",
  },
  container: {
   margin: 'auto',
   width: '100%'
  }
};

export default function Main() {
  return (
    <div className="flex-container" style={styles.container}>
      <h1>Hi my name is Julia</h1>
      <img style={styles.img} src={myImage} alt="jg eating" />
      <div>
        <p> I am a full-stack web developer based in Birmingham</p>
      </div>
    </div>
  );
}
