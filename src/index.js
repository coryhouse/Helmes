import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import Users from "./Users";

class App extends React.Component {
  render() {
    const users = [
      { name: "Cory", email: "housecor@gmail.com" },
      { name: "Sally", email: "sally@gmail.com" },
      { name: "Tammy", email: "tammy@gmail.com" }
    ];

    return (
      <div>
        <Users users={users} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
