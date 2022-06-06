import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const styles = {
  container: {
    marginTop: "2%",
    color: "white",
  },
  card: {
    marginLeft: "1%",
    marginRight: "2%",
  },
};

export default function CV() {
  return (
    <div style={styles.container}>
      <Carousel responsive={responsive}>
        <div style={styles.card}>
          <h3> React.js</h3>
          <hr />
          <ul style={styles.card}>
            <li>Render elements dynamically</li>
            <li>Implement JSX expressions</li>
            <li>Pass data using props</li>
            <li> Implement methods inside components</li>
            <li>Hardcoded values in JSX</li>
            <li> Implemented the useEffect hook</li>
            <li>Conditional rendering</li>
          </ul>
        </div>
        <div style={styles.card}>
          <h3> Front End</h3>
          <hr />
          <ul>
            <li>HTML5</li>
            <li>
              Handlebars.js: data serialisation, helpers and partial views
            </li>
            <li>Creating Wire Frames</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Flexbox</li>
            <li>Media Queries</li>
            <li>Responsive layouts</li>
            <li></li>
          </ul>
        </div>
        <div style={styles.card}>
          <h3> Back End</h3>
          <hr />
          <ul>
            <li>JavaScript </li>
            <li>MVC framework </li>
            <li>Document Object Model </li>
            <li>Local Storage </li>
            <li>jQuery </li>
            <li>Moment </li>
            <li>Using the browser fetch method on APIs </li>
            <li>JavaScript constructors </li>
            <li>TDD </li>
            <li>Classes </li>
            <li>Node.js </li>
            <li>Working with library packages </li>
            <li>Modularization </li>
            <li>Ability to create command line interface applications </li>
          </ul>
        </div>
        <div style={styles.card}>
          <h3> Other skills</h3>
          <hr />
          <ul>
            <li>GitHub branching </li>
            <li>GitRevert</li>
            <li>Using Git to collaborate on projects </li>
            <li>Branch protection </li>
            <li>Forking repositories </li>
          </ul>
        </div>
        <div style={styles.card}>
          <h3> Express.js</h3>
          <hr />
          <ul>
            <li>Implement Express.js routing </li>
            <li> Set up express servers </li>
            <li> Implement middleware </li>
            <li> Serve Static files </li>
            <li>
              Ability to implement client server requests: Post, Fetch, Put,
              Delete
            </li>
            <li> Ability to implement sessions and cookies </li>
            <li>
              {" "}
              Ability to implement middleware to utilise as authentication{" "}
            </li>
          </ul>
        </div>
        <div style={styles.card}>
          <h3> MySQL and Sequelize</h3>
          <hr />
          <ul>
            <li>
              Create models to build the database and building in validations
              and constraints
            </li>
            <li> Build models and design schema with tables</li>
            <li> RESTful routing</li>
            <li> Ability to CRUD data</li>
            <li> Seed a database</li>
            <li> Define relationships between tables</li>
            <li> Carry out complex queries</li>
            <li> Join clauses to combine tables</li>
            <li> Utilise Bcrypt to hash passwords</li>
          </ul>
        </div>
        <div style={styles.card}>
          <h3> MongoDB and Mongoose</h3>
          <hr />
          <ul>
            <li> CRUD data using MongoDB Compass </li>
            <li> Cursor methods to change how documents are returned </li>
            <li> Create models and schemas </li>
            <li> CRUD using Mongoose </li>
            <li> Implement instance methods on a mongoose model </li>
            <li> Implement sub-documents in a Mongoose Schema </li>
            <li> Aggregate middleware</li>
            <li> Creating and implementing virtuals</li>
            <li> Sub-document population</li>
          </ul>
        </div>
        <div style={styles.card}>
          <h3> Progressive Web Applications</h3>
          <hr />
          <ul>
            <li> Implement a webpack setup </li>
            <li> Bundle files using webpack </li>
            <li> Implement webpack plugins to generate separate CSS files </li>
            <li>
              Add webpack development server to a project using Hot Module
              Replacement
            </li>
            <li> Building applications using the client-server model </li>
            <li> Use workBox to generate a service worker </li>
            <li> Familiar with runtime caching strategy</li>
            <li>
              Implement Inject Manifest to generate a list of URLs to add to
              existing service worker
            </li>
            <li>
              Implemented IndexedDB on the client side as well as CRUDing data
            </li>
            <li> Familiar with addons such as Babel</li>
          </ul>
        </div>
        <div style={styles.card}>
          <h3> Programmes I am familiar with</h3>
          <hr />
          <ul>
            <li> Heroku</li>
            <li> VS Code </li>
            <li> Postman </li>
            <li> DBeaver </li>
            <li> Compass </li>
            <li> Git </li>
          </ul>
        </div>
      </Carousel>
    </div>
  );
}
