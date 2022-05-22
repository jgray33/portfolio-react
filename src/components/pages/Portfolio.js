import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const styles = {
  card: {
    width: "18rem",
    height: "26rem",
    display: "flex"
  },
  cardBody: {
    alignSelf: "flex-end"
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
  },
  container: {
      width: '250px',
      height: '300px'
  }
};

export default function Card({ projects }) {
     return (
  <div> 
    <Carousel responsive={responsive}>
  {projects.map((project) => (
<div key={project.id} className="card" style={styles.card} >
  <img src={project.image} className="card-img-top" alt="..."/>
  <div className="card-body d-flex flex-column" style={styles.cardBody}>
    <h5 className="card-title">{project.name}</h5>
    <p className="card-text">{project.description}</p>
    <a href="#" className="btn btn-primary mt-auto">Repository</a>
  </div>
</div>
  ))}
  
</Carousel>
</div>
     );
}


