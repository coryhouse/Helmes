import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";
import registerServiceWorker from "./registerServiceWorker";
import Users from "./Users";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "Cory", email: "housecor@gmail.com" },
        { id: 2, name: "Sally", email: "sally@gmail.com" },
        { id: 3, name: "Tammy", email: "tammy@gmail.com" }
      ]
    };
  }

  onDeleteClick = id => {
    const users = this.state.users.filter(user => user.id !== id);
    this.setState({ users });
  };

  render() {
    return (
      <div>
        <Navigation />
        <Users users={this.state.users} onDeleteClick={this.onDeleteClick} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
