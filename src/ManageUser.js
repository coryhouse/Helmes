import React, { Component } from "react";

class ManageUser extends Component {
  render() {
    return (
      <div>
        <h1>Manage User</h1>
        <form>
          <div>
            <label>Name</label>
            <br />
            <input type="text" />
          </div>

          <div>
            <label>Email</label>
            <br />
            <input type="text" />
          </div>

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default ManageUser;
