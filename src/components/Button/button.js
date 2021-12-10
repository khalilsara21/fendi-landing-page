import PropTypes from "prop-types";

function Button({ label }) {
  return (
    <button
      className="uk-button uk-button-primary uk-margin-auto-left uk-margin-auto-right uk-text-uppercase"
      aria-label={label}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
