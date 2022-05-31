// function BasketItem(props) {
//   console.log(props);
//   const {
//     mainId, displayName, price: { finalPrice }, quantity,
//   } = props;
function BasketItem({
  item, removeFromBasket, incQuantity, decQuantity,
}) {
  // console.log(item);
  const {
    mainId, displayName, price: { finalPrice }, quantity,
  } = item;
  return (
    <li className="collection-item">
      {displayName}
      {' '}
      <i className="material-icons basket-counter" onClick={() => decQuantity(mainId)}>remove</i>
      {' '}
      {quantity}
      {' '}
      <i className="material-icons basket-counter" onClick={() => incQuantity(mainId)}>add</i>
      {' '}
      {finalPrice * quantity}
      {' '}
      руб.
      <span className="secondary-content" onClick={() => removeFromBasket(mainId)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export default BasketItem;
