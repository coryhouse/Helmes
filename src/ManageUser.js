import React, { Component } from "react";
import PropTypes from "prop-types";
import { user } from "./propTypes";

class ManageUser extends Component {
  static propTypes = {
    user: user.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onEmailChange: PropTypes.func.isRequired
  };

  render() {
    const { user, onNameChange, onEmailChange } = this.props;
    const { name, email } = user;
    return (
      <div>
        <h1>Manage User</h1>
        <form>
          <div>
            <label>Name</label>
            <br />
            <input type="text" value={name} onChange={onNameChange} />
          </div>

          <div>
            <label>Email</label>
            <br />
            <input type="text" value={email} onChange={onEmailChange} />
          </div>

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default ManageUser;
