import {AiOutlineShoppingCart} from "react-icons/ai";
import {CiPizza} from "react-icons/ci";
import "./navbar.css";
import {Link} from "react-router-dom";
import {CartContext} from "../../context/CartContext";
import {useContext} from "react";
function Navbar({isCart}) {
  const cart = useContext(CartContext);
  const totalProducts = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <div className="navbar">
      <Link to="/" className="navbarTitle">
        <h1>Hungry</h1>
      </Link>

      {!isCart && (
        <Link to="/cart" className="navbarCart">
          <span>Your Order</span>
          <CiPizza className="navbarCartIcon" />
          <span className="navbarCartCount">
            {totalProducts ? totalProducts : "0"}
          </span>
        </Link>
      )}
    </div>
  );
}
export default Navbar;
