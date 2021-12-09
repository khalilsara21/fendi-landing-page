import PropTypes from "prop-types";

//Components
import Quote from "../Quote/quote";

//Style
import "./editorialBanner.scss";

function EditorialBanner({ image, image_alt, title, author, quote }) {
  return (
    <div className="uk-flex editorial-banner">
      <Quote title={title} quote={quote} author={author} className="uk-flex" />
      <img src={image} alt={image_alt} />
    </div>
  );
}

EditorialBanner.propTypes = {
  image: PropTypes.string.isRequired,
  image_alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  quote: PropTypes.string,
};

export default EditorialBanner;
