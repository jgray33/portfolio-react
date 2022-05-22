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
<div key={project.id} class="card" style={styles.card} >
  <img src={project.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{project.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  ))}
  
</Carousel>
</div>
     );
}


/* <div className="card flex-container" style={styles.card}>
      <h1>My work</h1>
      <Carousel responsive={responsive}     >
      {projects.map((project) => (
        <div className="card-body" key={project.id}>
          <h5 className="card-title">{project.name}</h5>
          <div style={styles.container}>
              <img style={styles.img} src={project.image}/>
              </div>
          <p className="card-text">{project.description}</p>
          <a href="{project.site}" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      ))}
      </Carousel>
    </div>
  */