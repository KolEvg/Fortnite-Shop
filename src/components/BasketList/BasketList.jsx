import BasketItem from '../BasketItem/BasketItem';

function BasketList({
  order, handleBasketShow, removeFromBasket, incQuantity, decQuantity,
}) {
  const totalPrice = order.reduce((acc, el) => acc + el.price.finalPrice * el.quantity, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.mainId}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
            item={item}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пустая3</li>
      )}
      <li className="collection-item active">
        Общая стоимость :
        {' '}
        {totalPrice}
        {' '}
        руб.
      </li>
      <li className="collection-item">
        <button className="btn-sub btn-small">
          Оформить
        </button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
    </ul>
  );
}

export default BasketList;
