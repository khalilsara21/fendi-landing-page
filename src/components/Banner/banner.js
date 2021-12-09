import PropTypes from "prop-types";

//Style
import "./banner.scss";

function Banner({ image, image_alt }) {
  return <img src={image} alt={image_alt} className="banner" />;
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  image_alt: PropTypes.string,
};

export default Banner;
