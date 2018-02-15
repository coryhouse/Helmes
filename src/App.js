import React from "react";

class App extends React.Component {
  users = [
    { name: "Cory", email: "housecor@gmail.com" },
    { name: "Bob", email: "bob@gmail.com" }
  ];

  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.users.map(user => {
            return (
              <li key={user.name}>
                {user.name} - {user.email}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
