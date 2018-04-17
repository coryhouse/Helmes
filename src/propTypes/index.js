import PropTypes from "prop-types";

export const user = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.email
});
