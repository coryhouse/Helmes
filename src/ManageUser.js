import React, { Component } from "react";
import { user } from "./types";
import PropTypes from "prop-types";

class ManageUser extends Component {
  state = {
    user: { ...this.props.user }
  };

  handleChange = event => {
    const user = this.state.user;
    const { name, value } = event.target;
    user[name] = value;
    this.setState({ user });
  };

  render() {
    const { name, email } = this.state.user;
    return (
      <form onSubmit={event => this.props.onSubmit(event, this.state.user)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={event => this.handleChange(event)}
          value={name}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={event => this.handleChange(event)}
          value={email}
        />
        <br />
        <button type="submit">Save</button>
      </form>
    );
  }
}

ManageUser.propTypes = {
  user: user,
  onSubmit: PropTypes.func.isRequired
};

export default ManageUser;
