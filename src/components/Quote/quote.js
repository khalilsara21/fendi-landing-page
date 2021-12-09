import PropTypes from "prop-types";

import "./quote.scss";

function Quote({ title, quote, author, className }) {
  return (
    <div className={`uk-flex uk-flex-column quote-container ${className}`}>
      {title && <h1 className="uk-text-center title">{title}</h1>}
      {quote && <h3 className="uk-text-center subtitle">{quote}</h3>}
      {author && <h3 className="uk-text-center subtitle">{author}</h3>}
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
