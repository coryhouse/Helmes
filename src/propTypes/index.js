import PropTypes from "prop-types";

export const user = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
});
