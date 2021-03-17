import React, { Component } from "react";
import ReactAux from "../../hoc/ReactAux/ReactAux";
import classes from "./Layout.module.css";
import NavigationBar from "../../Components/Navigation/NavigationBar/NavigationBar";
import Footer from "../../Components/Navigation/Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <ReactAux>
        {/* NavBar */}
        <NavigationBar />

        {/* Main Feed */}
        <main className={classes.Content}>{this.props.children}</main>

        {/* Footer */}
        <Footer />
        
      </ReactAux>
    );
  }
}

export default Layout;
