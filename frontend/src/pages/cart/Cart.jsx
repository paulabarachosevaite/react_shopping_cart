import Navbar from "../../components/navbar/Navbar";
import CartProduct from "../../components/cart/CartProduct";
import {CartContext} from "../../context/CartContext";
import {useContext} from "react";
import "./cart.css";
function Cart() {
  const cart = useContext(CartContext);
  const totalProducts = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const onCheckout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({items: cart.items}),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };
  return (
    <div>
      <Navbar isCart />
      <div>
        {totalProducts > 0 ? (
          <div className="cartContainer">
            <div className="cartProductsList">
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                  key={idx}
                />
              ))}
            </div>
            <div className="cartPurchaseContainer">
              <h1>Total: £{cart.getTotalCost().toFixed(2)}</h1>
              <button onClick={onCheckout}>Purchase</button>
            </div>
          </div>
        ) : (
          <div className="emptyCart">
            <h1>Your cart is empty</h1>
          </div>
        )}
      </div>
    </div>
  );
}
export default Cart;
