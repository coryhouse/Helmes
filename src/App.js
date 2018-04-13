import React from "react";
import HomePage from "./HomePage";
import Navigation from "./Navigation";
import Users from "./Users";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home"
    };

    // this.handleNavClick = this.handleNavClick.bind(this);
  }

  getCurrentPage() {
    switch (this.state.currentPage) {
      case "Home":
        return <HomePage />;
      case "Users":
        return <Users />;
      default:
        throw new Error(`Unknown page: ${this.state.currentPage}`);
    }
  }

  handleNavClick = event => {
    event.preventDefault();
    this.setState({ currentPage: event.target.name });
    //alert();
  };

  render() {
    return (
      <div>
        <Navigation onNavClick={this.handleNavClick} />
        {this.getCurrentPage()}
      </div>
    );
  }
}

export default App;
