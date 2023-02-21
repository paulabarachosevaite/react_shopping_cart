import "./cartProducts.css";
import {CartContext} from "../../context/CartContext";
import {useContext} from "react";
import {getProductData} from "../../products";

function CartProduct({id, quantity}) {
  const cart = useContext(CartContext);
  const productData = getProductData(id);
  return (
    <div>
      <div className="cartProductContainer">
        <div className="cartProductDesc">
          <img className="cartProductImage" src={productData.image} />
          <span className="cartProductName">{productData.product}</span>
        </div>
        <div className="cartProductInfo">
          <span>Quantity: {quantity}</span>
          <span>Price: {productData.price * quantity}</span>
          <button onClick={() => cart.deleteFromCart(id)}>Remove</button>
        </div>
      </div>
    </div>
  );
}
export default CartProduct;
