import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import classes from "./Layout.module.css";
import NavigationBar from "../../Components/Navigation/NavigationBar/NavigationBar";

class Layout extends Component {
  render() {
    return (
      <Aux>
        {/* NavBar */}
        <NavigationBar />

        {/* Main Feed */}
        <main className={classes.Content}>{this.props.children}</main>

        {/* Blog Posts Feed */}

        {/* Footer */}
      </Aux>
    );
  }
}

export default Layout;
