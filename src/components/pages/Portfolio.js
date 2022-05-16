import React from 'react'
import projects from '../../projects'

function createCard(project) {
    return(
        <Card 
        key={project.id}
        name={project.name}
        description={project.description}
        siteAddress={project.siteAddress}
        gitHub={project.gitHub}
        />
    )
}


export default function Card({projects}) {

    return(
        <div className="card">
      <h1>My work</h1>
      
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {projects.map((project) => (
            <div className='card-body' key={project.id}>
            {`${project.name}, ${project.description}`}
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">{project.description}</p>
            <a href="{project.site}" className="btn btn-primary">Go somewhere</a>
            </div>
        ))}
        </div>
    )}