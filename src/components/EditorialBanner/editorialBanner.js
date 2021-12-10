import PropTypes from "prop-types";

//Components
import Quote from "../Quote/quote";

//Style
import "./editorialBanner.scss";

function EditorialBanner({ image, image_alt, title, author, quote }) {
  return (
    <div className="uk-flex editorial-banner" role="banner">
      <Quote title={title} quote={quote} author={author} className="uk-flex" />
      <img src={image} alt={image_alt} />
    </div>
  );
}

EditorialBanner.propTypes = {
  image: PropTypes.string.isRequired,
  image_alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  quote: PropTypes.string.isRequired,
};

EditorialBanner.defaultProps = {
  image_alt: "Fendi",
};

export default EditorialBanner;
