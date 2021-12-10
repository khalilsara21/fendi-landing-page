import PropTypes from "prop-types";

//Style
import "./item.scss";

function Item({ id, image, name, description, price, soldOut }) {
  return (
    <div className="item">
      <img src={image} alt={name + "_" + id} />
      <p className="name">{name}</p>
      {description && <span className="description">{description}</span>}
      <p className="price">{price}</p>
      {soldOut && <span className="uk-badge badge">SOLD OUT</span>}
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string.isRequired,
  soldOut: PropTypes.bool,
};

Item.defaultProps = {
  soldOut: false,
};

export default Item;
