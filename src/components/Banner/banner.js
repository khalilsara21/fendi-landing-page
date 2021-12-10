import PropTypes from "prop-types";

//Style
import "./banner.scss";

function Banner({ image, image_alt }) {
  return (
    <div role="banner">
      <img src={image} alt={image_alt} className="banner" />
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  image_alt: PropTypes.string,
};

Banner.defaultProps = {
  image_alt: "Fendi",
};

export default Banner;
