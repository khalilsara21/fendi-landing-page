import PropTypes from "prop-types";

//Utils
import { useWindowSize } from "../../utils/useWindowSize";

//Style
import "./gallery.scss";
import Item from "./Item/item";

function Gallery({ items }) {
  const windowSize = useWindowSize();
  const isMobile = windowSize.innerWidth < 960;

  return (
    <div
      className={`uk-grid uk-text-center gallery ${
        isMobile ? "uk-child-width-1-2" : "uk-child-width-1-4"
      }`}
    >
      {items.map((item) => (
        <Item
          key={item.id}
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
