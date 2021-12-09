/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";

//Style
import "./carousel.scss";

function Carousel({
  carousel,
  arrow,
  description,
  title,
  fullSlider,
  autoplay,
}) {
  return (
    <div className={`carousel ${fullSlider && "full-slider"}`}>
      {title && (
        <h2 className="uk-text-center uk-text-uppercase title">{title}</h2>
      )}
      <div className="uk-flex">
        <div
          className={`uk-position-relative uk-visible-toggle uk-width-expand`}
          tabIndex="-1"
          data-uk-slider={`sets: true; autoplay: ${autoplay}`}
        >
          <ul className="uk-slider-items uk-child-width-1-2 uk-grid-small">
            {carousel.map((item) => (
              <li
                key={item.id}
                className="uk-transition-toggle uk-transition-opaque"
              >
                <img src={item.image} alt={item.name} />
                <div className="uk-position-center" />
              </li>
            ))}
          </ul>

          {arrow && (
            <>
              <a
                className="uk-position-center-left uk-position-small uk-hidden-hover"
                href="#"
                data-uk-slidenav-previous
                uk-slider-item="previous"
              ></a>
              <a
                className="uk-position-center-right uk-position-small uk-hidden-hover"
                href="#"
                data-uk-slidenav-next
                uk-slider-item="next"
              ></a>
            </>
          )}
        </div>
        {description && (
          <div className="uk-width-auto uk-margin-auto uk-margin-auto-vertical uk-text-center description">
            <h2>{description}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  carousel: PropTypes.array.isRequired,
  arrow: PropTypes.bool.isRequired,
  fullSlider: PropTypes.bool,
  autoplay: PropTypes.bool,
};

Carousel.defaultProps = {
  arrow: false,
  fullSlider: false,
  autoplay: false,
};

export default Carousel;
