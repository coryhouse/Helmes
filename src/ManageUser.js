import React, { Component } from "react";
import PropTypes from "prop-types";
import { user } from "./propTypes";

class ManageUser extends Component {
  static propTypes = {
    user: user.isRequired
  };

  render() {
    const { name, email } = this.props.user;
    return (
      <div>
        <h1>Manage User</h1>
        <form>
          <div>
            <label>Name</label>
            <br />
            <input type="text" value={name} />
          </div>

          <div>
            <label>Email</label>
            <br />
            <input type="text" value={email} />
          </div>

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default ManageUser;
