import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import classes from "./Layout.module.css";
import NavigationBar from "../../Components/Navigation/NavigationBar/NavigationBar";
import Footer from "../../Components/Navigation/Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <Aux>
        {/* NavBar */}
        <NavigationBar />

        {/* Main Feed */}
        <main className={classes.Content}>{this.props.children}</main>

        {/* Footer */}
        <Footer />
        
      </Aux>
    );
  }
}

export default Layout;
