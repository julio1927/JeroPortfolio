import React from "react";
import Layout from "./Containers/Layout/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aux from "./hoc/Aux/Aux";

//Pages
import HomePage from "./Components/Pages/HomePage/HomePage";
import AboutMePage from "./Components/Pages/AboutPage/AboutPage";
import ProjectsPage from "./Components/Pages/ProjectsPage/ProjectsPage";
import ResumePage from "./Components/Pages/ResumePage/ResumePage";

function App() {
  return (
    <Aux>
      <Layout>
        <Router>
          <Switch>
            <Route path="/AboutMe" component={AboutMePage} />
            <Route path="/Projects" component={ProjectsPage} />
            <Route path="/Resume" component={ResumePage} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Router>
      </Layout>
    </Aux>
  );
}

export default App;
