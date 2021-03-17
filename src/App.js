import React from "react";
import Layout from "./Containers/Layout/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactAux from "./hoc/ReactAux/ReactAux";

//Pages
import HomePage from "./Components/Pages/HomePage/HomePage";

function App() {
  return (
    <ReactAux>
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Router>
      </Layout>
    </ReactAux>
  );
}

export default App;
