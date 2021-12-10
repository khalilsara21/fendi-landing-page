import PropTypes from "prop-types";

//Components
import Button from "../Button/button";

//Style
import "./title.scss";

function Title({ title, subtitle, button_cta, className }) {
  return (
    <div
      className={`uk-flex uk-flex-column title-container ${className}`}
      role="textbox"
    >
      {title && <h1 className="uk-text-center title">{title}</h1>}
      {subtitle && <h3 className="uk-text-center subtitle">{subtitle}</h3>}
      {button_cta && <Button label={button_cta} />}
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  button_cta: PropTypes.string,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: "",
};

export default Title;
