import "./product.css";
import {CartContext} from "../../context/CartContext";
import {useContext} from "react";
function Product({product, image, price, description, sizes, id}) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(id);

  return (
    <div className="productContainer">
      <div>
        <div className="productInfo">
          <img src={image} alt="Product" className="productImage" />
          <h4 className="productName">{product} </h4>
          <p className="productDesc">{description}</p>
          <p className="productPrice">£{price}</p>
          <div className="productSelectItems">
            <div></div>
          </div>
          {productQuantity > 0 ? (
            <div className="quantity">
              <div className="quantityControl">
                <p>Added: {productQuantity}</p>
                <div className="changeQuantityButtons">
                  <button
                    className="changeQuantityButton"
                    onClick={() => cart.addOneToCart(id)}
                  >
                    +
                  </button>
                  <button
                    className="changeQuantityButton"
                    onClick={() => cart.removeOneFromCart(id)}
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                onClick={() => cart.deleteFromCart(id)}
                className="deleteCartButton"
              >
                Remove Item
              </button>
            </div>
          ) : (
            <button
              onClick={() => cart.addOneToCart(id)}
              className="productButton"
            >
              ADD
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Product;
