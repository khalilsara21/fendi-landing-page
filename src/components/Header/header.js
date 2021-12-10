//Assets
import header_d from "../../assets/images/header-d.png";

//Style
import "./header.scss";

function Header() {
  return (
    <header role="banner">
      <img src={header_d} alt="Fendi Header" className="header" />
    </header>
  );
}

export default Header;
