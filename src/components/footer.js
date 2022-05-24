import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const styles= {
icons: {
    padding: "20px",
    fontSize: "30px"

},
center: {
    marginLeft: "auto",
    marginRight: "auto",
        },
    
}

export default function Footer() {
    return (
        <div className='flex-container'>
            <p style={styles.center} >             
            <a href='https://www.linkedin.com/in/julia-g-5a13b168/'><FontAwesomeIcon icon={faLinkedin} style={styles.icons} /></a>
            <a href='https://github.com/jgray33'><FontAwesomeIcon icon={faGithub} style={styles.icons} /></a>
            <a href='mailto:julia.gray30@gmail.com'><FontAwesomeIcon icon={faEnvelope} style={styles.icons} /></a>
            
            </p>
        </div>
    )
}