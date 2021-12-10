import PropTypes from "prop-types";

//Utils
import { useWindowSize } from "../../utils/useWindowSize";

//Components
import Item from "./Item/item";

//Style
import "./gallery.scss";

function Gallery({ items }) {
  const windowSize = useWindowSize();
  const isMobile = windowSize.innerWidth < 640;
  const isDesktop = windowSize.innerWidth > 959;

  function getChildWidth() {
    let width = "";
    if (isMobile) width = "uk-child-width-1-2";
    else if (isDesktop) width = "uk-child-width-1-4";
    else width = "uk-child-width-1-3 uk-flex-center";

    return width;
  }

  const childWidth = getChildWidth();

  return (
    <div className={`uk-grid uk-text-center gallery ${childWidth}`} role="list">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          description={item.description}
          price={item.price}
          soldOut={item.soldOut}
        />
      ))}
    </div>
  );
}

Gallery.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Gallery;
