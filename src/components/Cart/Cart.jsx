import './Cart.sass';

function Cart({ quantity, handleBasketShow }) {
  // const { quantity = 0 } = props;
  return (
    <div className="cart purple darken-3 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      { quantity ? (
        <span className="cart-quantity">{quantity}</span>
      ) : null }
    </div>
  );
}

export default Cart;
