import React from "react";
import Layout from "./Containers/Layout/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aux from "./hoc/Aux/Aux";

//Pages
import HomePage from "./Components/Pages/HomePage/HomePage";

function App() {
  return (
    <Aux>
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Router>
      </Layout>
    </Aux>
  );
}

export default App;
