import PropTypes from "prop-types";

//Style
import "./quote.scss";

function Quote({ title, quote, author, className }) {
  return (
    <div
      className={`uk-flex uk-flex-column quote-container ${className}`}
      role="textbox"
    >
      {title && (
        <h2 className="uk-text-center uk-text-uppercase title">{title}</h2>
      )}
      {quote && <h3 className="uk-text-center quote">{quote}</h3>}
      {author && <h3 className="uk-text-center author">{author}</h3>}
    </div>
  );
}

Quote.propTypes = {
  title: PropTypes.string,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
  className: PropTypes.string,
};

Quote.defaultProps = {
  className: "",
};

export default Quote;
