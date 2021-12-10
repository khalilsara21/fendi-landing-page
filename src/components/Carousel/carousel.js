/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";

//Utils
import { useWindowSize } from "../../utils/useWindowSize";

//Style
import "./carousel.scss";

function Carousel({
  carousel,
  arrow,
  dotnav,
  description,
  title,
  fullSlider,
  autoplay,
}) {
  const windowSize = useWindowSize();
  const isMobile = windowSize.innerWidth < 640;
  const isDesktop = windowSize.innerWidth > 959;

  return (
    <div className={`carousel ${fullSlider && !isMobile && "full-slider"}`}>
      {title && (
        <h2 className="uk-text-center uk-text-uppercase title">{title}</h2>
      )}
      <div className={`uk-flex content`}>
        <div
          className={`uk-position-relative uk-visible-toggle ${
            isMobile ? "" : "uk-width-expand"
          }`}
          tabIndex="-1"
          data-uk-slider={`sets: ${!isMobile}; autoplay: ${autoplay}`}
          role="slider"
        >
          <ul
            className={`uk-slider-items ${
              isMobile ? "uk-grid" : "uk-child-width-1-2 uk-grid-small"
            }`}
          >
            {carousel.map((item) =>
              isMobile ? (
                <li key={item.id} className="uk-width-4-5">
                  <div className="uk-panel">
                    <img src={item.image} alt={item.name} />
                  </div>
                </li>
              ) : (
                <li
                  key={item.id}
                  className="uk-inline-clip uk-transition-toggle"
                  tabIndex="0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="uk-transition-scale-up uk-transition-opaque"
                  />
                </li>
              )
            )}
          </ul>

          {dotnav && !isDesktop && (
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
          )}

          {arrow && isDesktop && (
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
          <div
            className={`uk-margin-auto uk-margin-auto-vertical uk-text-center description ${
              isMobile ? "" : "uk-width-auto"
            }`}
          >
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
  dotnav: PropTypes.bool.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  fullSlider: PropTypes.bool.isRequired,
  autoplay: PropTypes.bool.isRequired,
};

Carousel.defaultProps = {
  arrow: false,
  dotnav: false,
  fullSlider: false,
  autoplay: false,
};

export default Carousel;
