import React from "react";
import Nav from "./components/Nav";
import Card from './components/Card'
import Main  from "./components/Main";

import projects from './projects'

export default function app() {
  return (
    <div>
      <Nav />
      <Main />
      <Card projects={projects}/>
    </div>
  );
}
