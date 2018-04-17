import React, { Component } from "react";
import PropTypes from "prop-types";
import { user } from "./propTypes";

class ManageUser extends Component {
  constructor(props) {
    super(props);
    this.nameInputRef = React.createRef();
  }

  componentDidMount() {
    this.nameInputRef.current.focus();
  }

  render() {
    const { errors, onSaveUser, user, onUserChange } = this.props;
    return (
      <form onSubmit={onSaveUser}>
        <label>Name</label>
        <input ref={this.nameInputRef} type="text" name="name" />
        {errors.name}

        <label>Email</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={onUserChange}
        />
        {errors.email}

        <input type="submit" value="Save" />
      </form>
    );
  }
}

ManageUser.propTypes = {
  errors: PropTypes.object,
  user: user.isRequired,
  onSaveUser: PropTypes.func.isRequired,
  onUserChange: PropTypes.func.isRequired
};

ManageUser.defaultProps = {
  errors: {},
  onSaveUser: function() {}
};

export default ManageUser;
