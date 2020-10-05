import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./header";
import AboutMe from "../pages/about-me";
import Education from "../pages/education";
import Skills from "../pages/skills";
import Projects from "../pages/projects";
import Contact from "../pages/contactinfo";
import Footer from "./footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/aboutme">
          <AboutMe />
        </Route>

        <Route path="/education">
          <Education />
        </Route>

        <Route path="/skills">
          <Skills />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
